import React, { useState } from 'react';

function About() {

    const about = [
        { title: "About 1", description: "Duis nostrud mollit commodo veniam veniam consequat cillum tempor consectetur fugiat et. Exercitation aute dolor voluptate fugiat proident consectetur ea. Proident eiusmod cillum sunt laborum minim esse. Consequat proident anim voluptate dolore.", 
        image : "https://s.cafebazaar.ir/images/icons/com.instbox.music.mp3.vid-9ef6618a-717d-45ec-be34-9d92b5ecc490_512x512.png?x-img=v1/format,type_webp,lossless_false/resize,h_256,w_256,lossless_false/optimize"       },
        { title: "About 2", description: "Aliquip laborum dolor commodo amet laboris. Ipsum consectetur duis nostrud est. Aliquip sint voluptate dolor aliqua deserunt duis et cillum cupidatat sunt anim. Velit aliqua veniam cupidatat proident sint culpa elit do aliquip aute voluptate laborum Lorem. Adipisicing deserunt nisi Lorem sunt exercitation deserunt consectetur et. Sint id magna aute non reprehenderit.",
        image :"https://s.cafebazaar.ir/images/icons/com.aparat.filimo-45c1fe1f-5821-403f-9422-86651de3885e_512x512.png?x-img=v1/format,type_webp,lossless_false/resize,h_256,w_256,lossless_false/optimize"},
        { title: "About 3", description: "Eiusmod dolore nostrud elit in aliquip id magna labore aliqua incididunt. Ut dolor ut ad sunt deserunt amet. Ullamco tempor non laboris tempor nisi. Eu veniam quis enim magna excepteur enim nostrud ipsum. Lorem consequat proident minim ea. Laboris nulla laboris irure aliquip dolor do et irure amet consequat elit.",
        image :"https://s.cafebazaar.ir/images/icons/com.bubblesoft.android.bubbleupnp-a35753c3-0ccf-47c3-9d37-7677c78be1ad_512x512.png?x-img=v1/format,type_webp,lossless_false/resize,h_256,w_256,lossless_false/optimize"    },
    ];

    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <>
            <div>

                <div className="container mx-auto px-6 p-10">

                    <h2 className="text-4xl font-bold text-center text-emerald-50 mb-8 py-10 font-serif border-b-4 border-[#8cb1b4]">ABOUT ...</h2>

					<div className=" max=  mt-28  rounded-3xl border-gray-400 border-double border-4 bg-gradient-to-r from-[#618b92] to-[#776080]  p-8  shadow-2xl shadow-black italic   text-lg ">
                    <h1 className="py-2 font-bold text-2xl  text-black "> about : </h1>
                    <p className="leading-relaxed text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ipsum vel nunc commodo hendrerit sit amet vel
                        nisi. Donec sodales maximus justCulpa aliqua velit veniam officia. Officia culpa magna aliqua eu est mollit veniam quis in. Aute officia aliquip commodo excepteur Lorem esse reprehenderit. In ea ipsum dolore do mollit et quis in officia enim. Dolore ut sint aliqua dolor nulla dolor mollit voluptate qui duis amet non. Ipsum in nostrud ad consequat do.Cillum fugiat consectetur minim exercitation est ullamco. Nostrud elit in amet do ullamco dolore anim laborum nisi elit laborum ad in officia. Velit amet officia nostrud mollit dolor exercitation Lorem ea aute aliquip excepteur esse ullamco veniam. Fugiat dolore qui eu Lorem consequat qui enim pariatur.o, nec Deserunt ea est nisi qui ullamco enim id amet sunt consectetur do quis. Occaecat nostrud reprehenderit aute ex velit commodo magna dolore proident est consectetur. Id sunt excepteur quis id dolore ut ullamco consectetur consequat incididunt qui non. dictum lectus malesuada non. Sed auctor ultrices tellus non varius.
                        {showMore && (
                            <span id="more-text">
                                Sed eu enim malesuada,Reprehenderit reprehenderit nulla est ut qui amet id. Ea ut ea ullamco nostrud deserunt id magna aute velit adipisicing anim excepteur. Amet sunt eiusmod proident ullamco nostrud aliquip id commodo elit. Adipisicing anim adipisicing ullamco est consequat nisi ad qui anim voluptate laboris occaecat excepteur proident. Eiusmod sit duis deserunt incididunt cillum dolor enim exercitation. Proident ut duis laborum incididunt eu cupidatat nostrud consequat tempor eiusmod voluptate. Sint eiusmod laboris amet sint sit eiusmod pariatur duis.Nulla nulla veniam et reprehenderit. Deserunt esse quis id incididunt occaecat dolor elit consequat consequat. Aliqua et elit consectetur voluptate do id amet sint proident quis. Minim officia aliquip in aute dolor amet exercitation dolor adipisicing nostrud laboris aliqua. Nulla est occaecat cupidatat exercitation proident velit commodo qui tempor minim proident non anim labore. fermentum Sint elit Lorem ea sint Lorem esse incididunt. Ipsum reprehenderit ut occaecat ad magna commodo consequat elit aliquip non aute. Deserunt et ex labore eiusmod minim deserunt ullamco. Laborum occaecat anim excepteur aliquip ex ex Lorem in est ipsum aliqua pariatur exercitation. Anim consectetur nulla non laboris laborum mollit officia.Commodo excepteur sint deserunt pariatur sint quis fugiat deserunt cupidatat in in minim. Excepteur labore labore aliqua velit commodo labore qui laborum aliquip labore id. Minim adipisicing cupidatat do exercitation esse ut do. Minim ex eu est deserunt fugiat deserunt cillum ullamco. Ut excepteur irure sit adipisicing qui dolore aliquip reprehenderit ex duis.Aute ut do consectetur adipisicing pariatur adipisicing labore tempor aliquip aute dolore incididunt quis nisi. Esse velit id mollit dolore et veniam veniam aute. Dolor cupidatat nisi amet cupidatat aute non. Ex commodo voluptate sit veniam dolor et exercitation sunt tempor aliquip. Reprehenderit dolor mollit est exercitation adipisicing mollit ipsum. Duis minim esse eiusmod commodo proident labore ad consequat ipsum proident Lorem.mi eu, finibus velit. Nam quis blandit velit, vel vehicula neque. Etiam eu lorem suscipit, sollicitudin ante at, pharetra quam.
                            </span>
                        )}
                    </p>
                    <button onClick={toggleShowMore} className="mt-8 font-bold border p-1 px-3 shadow-inner shadow-black  border-double rounded-3xl  text-[#7a3250] focus:outline-none">
                        {showMore ? "Hide" : "Read More"}
                    </button>
                    </div>

    {/* // ------------------------------------------------------------------------------------------------------------- */}

                    {about.map((item, index) => (

                        <div key={index} className="flex items-center flex-wrap mb-20 mt-40 ml-20 ">
                            <div className="w-full md:w-1/2">
                                <h4 className="text-3xl text-emerald-50 font-bold mb-3 border-b-2 pb-2 border-[#03312d62]">{item.title}</h4>
                                <p className="text-emerald-200 mb-8">{item.description}</p>
                            </div>
                            <div className="w-full md:w-1/2 ">
                                <img src={item.image} alt="image" className=' h-60 lg:ml-60 ml-10' />
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </>
    );
}

export default About;
