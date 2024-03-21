import React, { useState } from 'react'
import Handler from '../Handler';

export default function Pitems() {

    
    const pitems = [
        {
            id: '1',
            name : 'Post 1',
            description: 'Cillum laborum ex occaecat nisi non. Sunt consequat tempor labore enim. Occaecat commodo pariatur Lorem nostrud exercitation cupidatat sint ex. Lorem magna pariatur sit nulla deserunt eu sint dolor. Ullamco elit qui eu aute quis voluptate exercitation commodo duis. Ad enim proident eu nisi labore ut excepteur enim.',
            image : 'src/image/camrea.jpeg',
        },
        {
            id: '2',
            name : 'Post 2',
            description: 'Fugiat nostrud nisi velit qui pariatur.. Est ad quis dolor consectetur mollit culpa voluptate adipisicing.',
            image : 'src/image/lap.jpg',
        },
        {
            id: '3',
            name : 'Post 3',
            description: 'Magna adipisicing ad eiusmod deserunt elit commodo ullamco nisi elit mollit ut et ipsum deserunt.Laboris quis labore ad quis non veniam exercitation culpa irure fugiat esse cillum.',
            image : 'src/image/ca-times.brightspotcdn.jpg',
        },
        {
            id: '4',
            name : 'Post 4',
            description: 'Elit commodo Lorem anim adipisicing velit.Ut deserunt occaecat Lorem cupidatat adipisicing ullamco.',
            image : 'src/image/ca-times.brightspotcdn.webp',
        },
        {
            id: '5',
            name : 'Post 5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, ipsum et laoreet ultricies, turpis nisi convallis magna, at aliquet justo nunc at velit. Vestibulum pharetra urna quis magna ultrices, eget faucibus sapien feugiat.',
            image : 'src/image/pngtree-futuristic-blue-holographic-earth-globe-spaceship-background-3d-rendered-image_3836250.jpg',
        },
        {
            id: '6',
            name : 'Post 6',
            description: 'This is the description for Post 6. It can contain any information you want.',
            image : 'src/image/painting-mountain-lake-with-mountain-background_188544-9126.avif',
        },
        {
            id: '7',
            name : 'Post 7',
            description: 'Another description for Post 7. You can customize it as needed.',
            image : 'src/image/instagram-image-size.avif',
        },
        {
            id: '8',
            name : 'Post 8',
            description: 'Description for Post 8. Customize it according to your requirements.',
            image : 'src/image/green-scaled.jpg',
        },
        {
            id: '9',
            name : 'Post 9',
            description: 'This is the description for Post 9. It can contain any information you want.',
            image : 'src/image/Image_created_with_a_mobile_phone.png',
        },
        {
            id: '10',
            name : 'Post 10',
            description: 'Another description for Post 10. You can customize it as needed.',
            image : 'src/image/ca-tzimes.brightspotcdn.webp',
        },
    ];
    



    return (
        <div >
            <Handler pitems={pitems}  />
        </div>
    )
}




