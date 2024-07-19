import React from 'react';
import {FileInput, View, Text, Image} from "luminus-daisy"

export default function CheckboxBlock() {

    const [file, setFile] = React.useState("https://via.placeholder.com/150");

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        const fileURL = URL.createObjectURL(selectedFile);
        setFile(fileURL);
    }

    return (
        <View className="bg-white p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">File Input</Text>

                <Text render="p">A simple file input</Text>
                <FileInput />

                <Text render="p">File input with onChange</Text>
                <FileInput onChange={e => handleFileChange(e)} />
                <Image src={file} alt="placeholder" />


                <Text render="p">File input with disabled</Text>
                <FileInput disabled />

                <Text render="p">File input with multiple</Text>
                <FileInput multiple />

                <Text render="p">File input with accept</Text>
                <FileInput accept="image/*" />

                <Text render="p">File input with border</Text>
                <FileInput className="file-input-bordered" />

                <Text render="p">File input no background (ghost)</Text>
                <FileInput className="file-input-ghost" />

                <Text render="p">File input with colors</Text>
                <FileInput className="file-input-primary" />

                <div className='mt-2 mb-2'></div>

                <FileInput className="file-input-secondary" />

                <div className='mt-2 mb-2'></div>

                <FileInput className="file-input-accent" />

                <div className='mt-2 mb-2'></div>

                <FileInput className="file-input-info" />

                <div className='mt-2 mb-2'></div>

                <FileInput className="file-input-success" />

                <div className='mt-2 mb-2'></div>

                <FileInput className="file-input-warning" />

                <div className='mt-2 mb-2'></div>

                <FileInput className="file-input-error" />

                <div className='mt-2 mb-2'></div>

                <Text render="p">File input with label</Text>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Pick a file</span>
                        <span className="label-text-alt">Alt label 1</span>
                    </div>
                    <FileInput />
                    <div className="label">
                        <span className="label-text-alt">Alt label 2</span>
                        <span className="label-text-alt">Alt label 3</span>
                    </div>
                </label>

                <Text render="p">File input with sizes</Text>
                <FileInput className="file-input-xs" />

                <div className='mt-2 mb-2'></div>

                <FileInput className="file-input-sm" />

                <div className='mt-2 mb-2'></div>

                <FileInput className="file-input-md" />

                <div className='mt-2 mb-2'></div>

                <FileInput className="file-input-lg" />


            </View>
        </View>
    );
}