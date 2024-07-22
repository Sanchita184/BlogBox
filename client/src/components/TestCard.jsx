// components/BlogCard.js
import React from 'react';

const TestCard = ({ post }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg my-4">
            <img className="w-full" src={post.imageUrl} alt={post.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{post.title}</div>
                <p className="text-gray-700 text-base">
                    {post.description}
                </p>
            </div>
        </div>
    );
};

export default TestCard;
