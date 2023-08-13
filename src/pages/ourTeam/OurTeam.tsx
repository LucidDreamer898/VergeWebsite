import { useEffect,useState } from "react"

export default function OurTeam(){
    const memberCards: MemberInfo[] = [
        {
            pfp: "https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg",
            name: "Abhi Boga",
            role: "Outreach researcher",
            bio: "I like to make things in my free time such as electrical contraptions or websites for clubs. I also like to go mountain biking and watch anime",
            team: "Outreach"
        },
        {
            pfp: "https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg",
            name: "Vivek Maddineni",
            role: "Captain",
            bio: "I like to make things in my free time such as electrical contraptions or websites for clubs. I also like to go mountain biking and watch anime",
            team: "Programming"
        },
        {
            pfp: "/ExampleProfilePic.jpg",
            name: "Timothy Zheng",
            role: "Programming Lead",
            bio: "I like to make things in my free time such as electrical contraptions or websites for clubs. I also like to go mountain biking and watch anime",
            team: "Programming"
        }
    ]

    const [globalMousePosition, setGobalMousePosition] = useState<{x: number, y: number}>({x: 0, y: 0})
    const [localMousePosition, setLocalMousePosition] = useState<{x: number, y: number}>({x: 0, y: 0})

    const handleMouseMove = (event: any) => {
        const localWidth = event.target.clientWidth;
        const localHeight = event.target.clientHeight;

        const localX = event.target.offsetLeft;
        const localY = event.target.offsetTop;

        const trackX = event.clientX - event.target.offsetLeft;
        const trackY = event.clientY - event.target.offsetTop

        const middleX = ((localX + localWidth) / 2) - (localWidth / 2);
        const middleY = ((localY + localHeight) / 2) - (localHeight / 2);

        const offsetX = ((trackX - middleX) / middleX);
        const offsetY = ((trackY - middleY) / middleY);
        
        setLocalMousePosition({ x: trackX , y: trackY });
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
                <h1 className="flex w-full font-bold font-quicksand text-text-light justify-center h-fit text-5xl">
                    Meet Our Team
                </h1>

            <div className="flex w-full h-screen p-2 flex-wrap">
            {[...memberCards, ...memberCards, ...memberCards].map((member) => (
                <div className="flex justify-center w-1/4">           
                <div className="relative flex w-72 border-2 border-secondary/50 h-[512px] rounded-2xl justify-center m-8" onMouseMove={handleMouseMove}>
                    <img className="flex object-cover rounded-2xl" src={member.pfp}/>
                    <p className="absolute w-full h-full rounded-2xl bg-gradient-to-t from-secondary-dark/95 from-25%"/>
                    <p className="absolute flex w-full justify-center font-bold text-text-light bottom-36">{member.name}</p>
                    <p className="absolute flex w-full justify-center text-sm bottom-32">{member.role}</p>
                    <p className="absolute px-2 bottom-14 text-center text-xs">{member.bio}</p>
                    <p className="absolute flex w-1/2 justify-center bottom-4 text-xs bg-secondary/50 border-secondary border-2 rounded-full p-1">{member.team}</p>
                </div>
                </div>
                        ))}
                    {/* <p>({localMousePosition.x}, {localMousePosition.y})</p> */}
            </div>
        </>
    )
}