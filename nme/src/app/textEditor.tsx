'use client';

import React, { useState } from 'react';
import { EditorView } from '@codemirror/view';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript'; // JavaScript language mode
import { oneDark } from '@codemirror/theme-one-dark'; // Theme

export default function TextEditor({ onSubmit }: { onSubmit: () => void }) {
	const [code, setCode] = useState('');

	return (
		<div className="min-h-screen min-w-full bg-gray-900 p-8">
			<CodeMirror
				value={code}
				height="80vh"
				theme={oneDark}
				extensions={[javascript()]} // Enable JavaScript syntax highlighting
				onChange={(value) => setCode(value)} // Handle code updates
				editable={true}
				className="rounded-md shadow-lg border border-gray-700"
			/>
			<div className="absolute bottom-10 w-full flex justify-center">
				<button
					onClick={() => onSubmit()}
					className="bg-blue-500 text-white py-2 px-8 rounded-lg hover:bg-blue-600 shadow-lg">
					Submit
				</button>
			</div>
		</div>
	);
}
