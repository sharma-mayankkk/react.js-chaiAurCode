import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from "react-hook-form"

export default function RTE({ name, control, label, defaultValue = "" }) {    return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
      <Controller
        name={name || "content"}
        control={control}              
        defaultValue={defaultValue}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
            initialValue={defaultValue}  
            onEditorChange={onChange}   
            init={{
              height: 600,
              menubar: 'file edit view insert format tools table help',
              branding: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                'preview', 'anchor', 'searchreplace', 'visualblocks',
                'code', 'fullscreen', 'insertdatetime', 'media',
                'table', 'help', 'wordcount', 'emoticons',
                'codesample', 'quickbars', 'directionality',
                'visualchars', 'nonbreaking', 'pagebreak',
                'autosave'
              ],
              toolbar:
                'undo redo | blocks fontfamily fontsize | ' +
                'bold italic underline strikethrough | ' +
                'alignleft aligncenter alignright alignjustify | ' +
                'outdent indent | numlist bullist | ' +
                'forecolor backcolor | removeformat | ' +
                'charmap emoticons | fullscreen preview | ' +
                'image media link codesample | ltr rtl',
              toolbar_mode: 'sliding',
              contextmenu: 'link image table',
              quickbars_selection_toolbar:
                'bold italic | quicklink h2 h3 blockquote',
              quickbars_insert_toolbar: 'quickimage quicktable',
              autosave_interval: '30s',
              autosave_restore_when_empty: true,
              content_style: `
                body {
                  font-family: Helvetica, Arial, sans-serif;
                  font-size: 14px;
                }`
            }}
          />
        )}
      />
    </div>
  )
}