import conf from '../conf/conf'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }
    //post Services:
    async createPost({ title, slug, content, featuredImg, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appWriteDbId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                    userId,
                }
            )
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug, { title, content, featuredImg, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appWriteDbId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                    userId,
                }
            )
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appWriteDbId,
                conf.appWriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            throw error
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appWriteDbId,
                conf.appWriteCollectionId,
                slug,
            )
        } catch (error) {
            throw error
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appWriteDbId,
                conf.appWriteCollectionId,
                queries,
                100,
                0,
            )

        } catch (error) {
            throw error;
            return false
        }
    }

    //file services:

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique,
                file
            )
        } catch (error) {
            throw error
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId,
            )
            return true
        } catch (error) {
            throw error
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )
    }
}

const service = new Service();

export default service;