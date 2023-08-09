export default function OurTeam(){
    return(
        <>
            <div className="flex w-full justify-center h-fit text-5xl">
                Meet The Team
            </div>

            <div className="flex w-full h-screen p-5">
                <div className="relative m-5 w-96 h-56 rounded-3xl bg-white">
                    <div className="flex items-center w-full h-full">
                        <img className="w-40 h-40 rounded-full" src="https://lh3.googleusercontent.com/a/AAcHTteMQphg8QBsoE79he6EyGLdJWBL6amXKwHevntLsIQJ3w=s576-c-no"/>
                    </div>

                    <div className="mx-4">
                        <div className="absolute top-4 left-40 font-semibold">Position</div>
                        <div className="absolute top-12 left-40 text-xl font-bold">Timothy Zheng</div>
                        <div className="absolute top-20 left-40 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in blandit elit, ac placerat erat. Vivamus sagittis nisi odio, et pretium enim bibendum ut. Nullam convallis rutrum sapien, sed posuereest semper at.</div>
                        <div className="absolute bottom-4 left-40 text-sm">(636)-484-6189</div>
                    </div>
                </div>
            </div>
        </>
    )
}