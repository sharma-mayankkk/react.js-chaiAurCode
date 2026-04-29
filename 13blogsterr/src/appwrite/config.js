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
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    // Post Services:
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appWriteDbId,
                conf.appWriteCollectionId,
                slug,
                { title, slug, content, featuredImage, status, userId } // 👈 add slug
            )
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {  // ✅ Bug 2
        try {
            return await this.databases.updateDocument(
                conf.appWriteDbId,
                conf.appWriteCollectionId,
                slug,
                { title, content, featuredImage, status }  // ✅ removed userId
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
            return true
        } catch (error) {
            throw error  // ✅ Bug 4
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
            throw error  // ✅ Bug 4
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appWriteDbId,
                conf.appWriteCollectionId,
                queries,        // ✅ Bug 3 — removed extra params
            )
        } catch (error) {
            throw error  // ✅ Bug 4
        }
    }

    // File Services:
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),    // ✅ Bug 1
                file
            )
        } catch (error) {
            throw error  // ✅ Bug 4
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
            throw error  // ✅ Bug 4
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFileView(
            conf.appWriteBucketId,
            fileId
        ).toString()
    }
}

const service = new Service();
export default service;