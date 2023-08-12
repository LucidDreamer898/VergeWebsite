import { useEffect,useState } from "react"

export default function OurTeam(){
    const [globalMousePosition, setGobalMousePosition] = useState<{x: number, y: number}>({x: 0, y: 0})
    const [localMousePosition, setLocalMousePosition] = useState<{x: number, y: number}>({x: 0, y: 0})

    const handleMouseMove = (event: any) => {
        const localWidth = event.target.clientWidth;
        const localHeight = event.target.clientHeight;

        const localX = event.target.offsetLeft;
        const localY = event.target.offsetTop;

        const trackX = (event.clientX)
        const trackY = event.clientY

        const middleX = ((localX + localWidth) / 2) - (localWidth / 2);
        const middleY = ((localY + localHeight) / 2) - (localHeight / 2);

        const offsetX = ((trackX - middleX) / middleX);
        const offsetY = ((trackY - middleY) / middleY);
        
        setLocalMousePosition({ x: middleX , y: middleX });
    };
    
    useEffect(() => {
        const handleMouseMove = (event: any) => {
            setGobalMousePosition({x: event.clientX, y: event.clientY})
        }
        window.addEventListener('mousemove', handleMouseMove);

        return() => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, [])

    return(
        <>
            {/* <div className="flex w-full justify-center h-fit text-5xl">
                Meet The Team
            </div> */}

            <div className="flex w-full h-screen p-5">
                <div className="relative flex w-56 border-2 border-secondary/50 h-96 rounded-2xl justify-center" onMouseMove={handleMouseMove}>
                    <img className="flex object-cover rounded-2xl" src="/ExampleProfilePic.jpg"/>
                    <p className="absolute w-full h-full rounded-2xl bg-gradient-to-t from-secondary-dark/95 from-25%"/>
                    <p className="absolute flex w-full justify-center font-bold text-text-light bottom-36">Abhi Boga</p>
                    <p className="absolute flex w-full justify-center text-sm bottom-32">Tenserflow Specialist</p>
                    <p className="absolute px-2 bottom-14 text-center text-xs">I like to make things in my free time such as electrical contraptions or websites for clubs. I also like to go mountain biking and watch anime</p>
                    <p className="absolute flex w-1/2 justify-center bottom-4 text-xs bg-secondary/50 border-secondary border-2 rounded-full p-1">Programming</p>
                </div>
                    <p>({localMousePosition.x}, {localMousePosition.y})</p>
            </div>
        </>
    )
}