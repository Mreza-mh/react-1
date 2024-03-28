import React, { useEffect, useState } from 'react'
import Handler from '../Handler';

export default function Pitems() {

    
    const [pitems , setpitems ] = useState([]);

    useEffect (() =>{

        const Udata = async ()=> {

            try {
                const res = await fetch("https://660317952393662c31ce886f.mockapi.io/posts");
                const data = await res.json();
                setpitems(data); 
            } catch (error) {
                console.log("error");
            }
            
        }
        Udata();

    } , []) ;




    return (
        <div >
            {/* <h2>dsd</h2> */}
            <Handler pitems={pitems}  />
        </div>
    )
}





// const pitems = [
//     {
//         id: '1',
//         name : 'Post 1',
//         description: 'Cillum laborum ex oc exercitation commodo duis. Ad enim proident eu nisi labore ut excepteur enim.',
//         image : 'src/image/camrea.jpeg',
//     },
//     {
//         id: '2',
//         name : 'Post 2',
//         description: 'Fugiat nostrud nisi velit qui pariatur.. Est ad quis dolor consectetur mollit culpa voluptate adipisicing.',
//         image : 'src/image/lap.jpg',
//     },
//     {
//         id: '3',
//         name : 'Post 3',
//         description: 'Magna adipisicing ad eiusmod deserunt elit commodo ullamco nisi elit mollit ut et ipsum deserunt.Laboris quis labore ad quis non veniam exercitation culpa irure fugiat esse cillum.',
//         image : 'src/image/ca-times.brightspotcdn.jpg',
//     },
//     {
//         id: '4',
//         name : 'Post 4',
//         description: 'Elit commodo Lorem anim adipisicing velit.Ut deserunt occaecat Lorem cupidatat adipisicing ullamco.',
//         image : 'src/image/ca-times.brightspotcdn.webp',
//     },
//     {
//         id: '5',
//         name : 'Post 5',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, ipsum et laoreet ultricies, turpis nisi convallis magna, at aliqu Vestibulum pharetra urna quis magna ultrices, eget faucibus sapien feugiat.',
//         image : 'src/image/pngtree-futuristic-blue-holographic-earth-globe-spaceship-background-3d-rendered-image_3836250.jpg',
//     },
//     {
//         id: '6',
//         name : 'Post 6',
//         description: 'This is the description for Post 6. It can contain any information you want.',
//         image : 'src/image/painting-mountain-lake-with-mountain-background_188544-9126.avif',
//     },
//     {
//         id: '7',
//         name : 'Post 7',
//         description: 'Eiusmod esse veniam non excepteur anim est fugiat ea ea veniam. ommodo duis incididunt.',
//         image : 'src/image/instagram-image-size.avif',
//     },
//     {
//         id: '8',
//         name : 'Post 8',
//         description: 'Cillum nulla ipsum duis sint cupidatat sit.Consectetur tempor adipisicing nisi sunt.',
//         image : 'src/image/green-scaled.jpg',
//     },
//     {
//         id: '9',
//         name : 'Post 9',
//         description: 'TExercitation adipisicing incididunt ad commodo sint dolore.Officia amet ex anim aliqua id ullamco ea laborum tempor est..',
//         image : 'src/image/Image_created_with_a_mobile_phone.png',
//     },
//     {
//         id: '10',
//         name : 'Post 10',
//         description: 'Irure deserunt fugiat velit sit elit pariatur adipisicing aliquip.Ad anim ut nulla Lorem.',
//         image : 'src/image/ca-tzimes.brightspotcdn.webp',
//     },
// ];