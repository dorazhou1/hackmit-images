import { Image } from '@/components/Image';

export function ImageWrapper({imageID} : {imageID: string}) {
    return <div className="im">
        <Image imageID={imageID} />
    </div>

}