import { Loader } from "lucide-react";

function LoaderComponents(){
    return (
        <div className="flex justify-center items-center h-full w-full">
            <Loader className={`animate-spin`}/>
        </div>
    )
}

export default LoaderComponents;