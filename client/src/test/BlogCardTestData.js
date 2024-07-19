import { faker } from '@faker-js/faker'
import { nanoid } from '@reduxjs/toolkit';

const newBlog = () => {
    return {
        id: nanoid(),
        profilePicture: faker.image.avatar(),
        author: faker.person.fullName(),
        date: faker.date.soon().toISOString().split('T')[0], // Format date to YYYY-MM-DD
        title: faker.lorem.sentence({ min: 5, max: 10 }),
        description: faker.lorem.paragraph({ min: 4, max: 15 }),
        likeCount: faker.random.numeric(2),
        commentCount: faker.random.numeric(2),
        banner: faker.image.abstract(96, 96, true),
        tags: [
            faker.string.alphanumeric({ length: { min: 3, max: 10 } }),
            faker.string.alphanumeric({ length: { min: 3, max: 10 } }),
            faker.string.alphanumeric({ length: { min: 3, max: 10 } })
        ]
    }
}

export const arrayOfBlogs = faker.helpers.multiple(newBlog, { count: 30 });
