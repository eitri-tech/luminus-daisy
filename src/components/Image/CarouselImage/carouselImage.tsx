import {Component} from "react";
import CommonProps from "../../commonProps";

const BULLET_LENGTH_DEFAULT: number = 5;
const BULLET_WIDTH: number = 1.125;

interface CarouselImageProps extends CommonProps {
    images: ImageProps[];
    itemClassName?: string;
    showBullets?: boolean;
    showCounter?: boolean;
    bullets?: number;
}

interface ImageProps {
    src: string;
    alt: string;
    onClick?: () => void;
}

interface CarouselImageState {
    currentIndex: number;
}

interface CounterProps {
    currentIndex: number;
    images: ImageProps[];
    showCounter?: boolean;
}

interface BulletsProps {
    currentIndex: number;
    images: ImageProps[];
    bullets: number;
    showBullets: boolean;
}

class Counter extends Component<CounterProps> {

    render() {
        const {currentIndex, images, showCounter = false} = this.props;

        if (!showCounter) {
            return <></>;
        }

        return (
            <div className="badge badge-neutral">
                {currentIndex + 1}/{images?.length}
            </div>
        );
    }
}

class Bullets extends Component<BulletsProps> {

    paginationSlide = (index: number) => {
        const {
            images,
            bullets = BULLET_LENGTH_DEFAULT
        } = this.props;
        const imageLength: number = images?.length;

        if (imageLength > bullets) {
            if (index > bullets - 1) {
                return Math.min(index - (Math.floor(bullets / 2)), imageLength - bullets) * (BULLET_WIDTH)
            }
        }

        return 0
    }

    render() {
        const {currentIndex, images, bullets, showBullets = false} = this.props;

        if (!showBullets) {
            return <></>;
        }

        return (
            <div className="flex justify-center overflow-x-auto w-full mt-2">
                <div className="relative overflow-hidden h-10" style={{width: `${bullets * BULLET_WIDTH}rem`}}>
                    <div className="flex absolute top-0 left-0 transition-transform" style={{
                        transform: `translateX(-${this.paginationSlide(currentIndex)}rem)`
                    }}>
                        {images?.map((_, index: number) => (
                            <div
                                key={index}
                                className={`
                                    w-2.5
                                    h-2.5
                                    rounded-full
                                    mx-1
                                    cursor-pointer
                                    transition-colors
                                    ${index === currentIndex ? "bg-black" : "bg-gray-300"}
                                `}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default class CarouselImage extends Component<CarouselImageProps, CarouselImageState> {

    constructor(props: CarouselImageProps) {
        super(props);
        this.state = {
            currentIndex: 0,
        };
    }

    handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const carousel = e.target as HTMLDivElement;
        const items = carousel.getElementsByClassName("carousel-item");
        const itemWidth = items[0].clientWidth;
        const scrollLeft = carousel.scrollLeft;
        const prevIndex = Math.floor(scrollLeft / itemWidth);

        if (scrollLeft % itemWidth === 0) {
            this.setState({currentIndex: prevIndex});
        }
    }

    render() {
        const {
            className = "",
            id,
            images,
            itemClassName,
            showBullets,
            showCounter,
            bullets = BULLET_LENGTH_DEFAULT
        } = this.props;

        const {
            currentIndex,
        } = this.state;

        if (!images?.length) {
            console.warn("CarouselImage: No images provided");
        }

        return (
            <div
                data-e="CarouselImage"
                id={id}
                className={`flex flex-col items-center`}
            >

                <Counter
                    showCounter={showCounter}
                    currentIndex={currentIndex}
                    images={images}
                />
                <div
                    className={`carousel ${className}`}
                    onScroll={(e) => this.handleScroll(e)}
                >
                    {images?.map((image: ImageProps, index: number) => (
                        <div
                            id={`carousel-item-id-${index}`}
                            key={`${index}-${image.alt}`}
                            data-e="CarouselImageItem"
                            className={`carousel-item ${itemClassName}`}
                            onClick={image.onClick}
                        >
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
                <Bullets
                    showBullets={!!showBullets}
                    currentIndex={currentIndex}
                    images={images}
                    bullets={bullets}
                />
            </div>
        );
    }
}
