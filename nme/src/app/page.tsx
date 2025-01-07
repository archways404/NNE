'use client';

import { useState } from 'react';
import TextEditor from './textEditor';

export default function Home() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	return (
		<div className="min-h-screen min-w-full">
			{!isSubmitted ? (
				<TextEditor onSubmit={() => setIsSubmitted(true)} />
			) : (
				<div className="flex flex-col justify-center items-center h-screen">
					<h1 className="text-3xl font-semibold">Submission Successful!</h1>
					<button
						onClick={() => setIsSubmitted(false)}
						className="mt-4 bg-blue-500 text-white py-2 px-8 rounded-lg hover:bg-blue-600">
						Go Back
					</button>
				</div>
			)}
		</div>
	);
}
