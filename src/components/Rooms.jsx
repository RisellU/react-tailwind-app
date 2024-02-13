import React from "react";

const Rooms = () => {
    return (
        <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
            <div className="lg:top-20 relative lg:col-span-1 col-span-2">
                <h3 className="text-2xl font-bold">Fine Interior Rooms</h3>
                <p className="pt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia dolorem explicabo ex et accusamus similique voluptatem?</p>
            </div>

            <div className="grid grid-cols-2 col-span-2 gap-2">
                <img className="object-cover w-full h-full" src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/03/08/1745/SECPM-P0009-Junior-Suite-Ocean-View-Double-Beds.jpg/SECPM-P0009-Junior-Suite-Ocean-View-Double-Beds.16x9.jpg?imwidth=1280" alt="cuarto de playa"/>
                <img className="row-span-2 object-cover w-full h-full" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/126936665.jpg?k=5d63769153ad273bbfad58153d1760b44c489e357fb4534e61b505c1dd996a3f&o=&hp=1" alt="balcon con jacuzzi"/>
                <img className="object-cover w-full h-full" src="https://playamujeres.com.mx/es/wp-content/themes/playamujeres/assets/img/hotels/secrets/suites/preferred-club-suites.webp" alt="blacon con picina"/>
            </div>
        </div>
    )
}

export default Rooms