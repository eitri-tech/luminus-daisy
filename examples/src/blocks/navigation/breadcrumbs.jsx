import React from "react";
import {Breadcrumbs, View, Text} from "luminus-daisy";

export default function BreadcrumbsBlock() {
    return (
        <View className="border-solid p-4 my-4 shadow-lg rounded-md ">
            <View className="prose prose-slate">
                <Text render="h3">Breadcrumbs</Text>

                <Text render="p">Display a basic breadcrumb</Text>
                <Breadcrumbs>
                    <Breadcrumbs.Item>Home</Breadcrumbs.Item>
                    <Breadcrumbs.Item>Documents</Breadcrumbs.Item>
                    <Breadcrumbs.Item>Add Document</Breadcrumbs.Item>
                </Breadcrumbs>

                <Text render="p">Breadcrumbs with icons</Text>
                <Breadcrumbs>
                    <Breadcrumbs.Item>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="h-4 w-4 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                        </svg>
                        Home
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="h-4 w-4 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                        </svg>
                        Documents
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="h-4 w-4 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        Add Document
                    </Breadcrumbs.Item>
                </Breadcrumbs>

                <Text render="p">Breadcrumbs with max-width</Text>
                <Breadcrumbs className="max-w-xs">
                    <Breadcrumbs.Item>Long text 1</Breadcrumbs.Item>
                    <Breadcrumbs.Item>Long text 2</Breadcrumbs.Item>
                    <Breadcrumbs.Item>Long text 3</Breadcrumbs.Item>
                    <Breadcrumbs.Item>Long text 4</Breadcrumbs.Item>
                    <Breadcrumbs.Item>Long text 5</Breadcrumbs.Item>
                </Breadcrumbs>

                <Text render="p">Breadcrumbs with custom text color</Text>
                <Breadcrumbs className="text-red-500">
                    <Breadcrumbs.Item>Home</Breadcrumbs.Item>
                    <Breadcrumbs.Item>Documents</Breadcrumbs.Item>
                    <Breadcrumbs.Item>Add Document</Breadcrumbs.Item>
                </Breadcrumbs>

                <Text render="p">Breadcrumbs with custom text color on item</Text>
                <Breadcrumbs>
                    <Breadcrumbs.Item className="text-red-800">Home</Breadcrumbs.Item>
                    <Breadcrumbs.Item className="text-yellow-800">Documents</Breadcrumbs.Item>
                    <Breadcrumbs.Item className="text-green-800">Add Document</Breadcrumbs.Item>
                </Breadcrumbs>
            </View>
        </View>
    );
}
