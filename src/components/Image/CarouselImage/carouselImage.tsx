import {Component} from "react";
import CommonProps from "../../commonProps";

interface CarouselImageProps extends CommonProps {
    images: ImageProps[];
    itemClassName?: string;
    enableNavigationButtons?: boolean;
    showBullets?: boolean;
    showCounter?: boolean;
}

interface ImageProps {
    src: string;
    alt: string;
    onClick?: () => void;
}

interface CarouselImageState {
    currentIndex: number;
    startBulletIndex: number;
    endBulletIndex: number;
}

export default class CarouselImage extends Component<CarouselImageProps, CarouselImageState> {

    constructor(props: CarouselImageProps) {
        super(props);
        this.state = {
            currentIndex: 0,
            startBulletIndex: 0,
            endBulletIndex: Math.min(5, props.images.length),
        };
    }

    updateBulletRange = (newIndex: number) => {
        const {images} = this.props;
        let startBulletIndex = this.state.startBulletIndex;
        let endBulletIndex = this.state.endBulletIndex;

        if (newIndex >= endBulletIndex) {
            startBulletIndex = newIndex - 4;
            endBulletIndex = newIndex + 1;
        } else if (newIndex < startBulletIndex) {
            startBulletIndex = newIndex;
            endBulletIndex = newIndex + 5;
        }

        this.setState({
            startBulletIndex: Math.max(0, startBulletIndex),
            endBulletIndex: Math.min(images.length, endBulletIndex)
        });
    };

    handlePrevClick = () => {
        this.setState((prevState: CarouselImageState) => {
            const newIndex = prevState.currentIndex === 0 ? this.props.images.length - 1 : prevState.currentIndex - 1;
            this.updateBulletRange(newIndex);
            return {currentIndex: newIndex};
        });
    };

    handleNextClick = () => {
        this.setState((prevState: CarouselImageState) => {
            const newIndex = prevState.currentIndex === this.props.images.length - 1 ? 0 : prevState.currentIndex + 1;
            this.updateBulletRange(newIndex);
            return {currentIndex: newIndex};
        });
    };

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
            enableNavigationButtons,
            showBullets,
            showCounter,
        } = this.props;

        const {
            currentIndex,
            startBulletIndex,
            endBulletIndex
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

                {showCounter && (
                    <div className="badge badge-neutral">
                        {currentIndex + 1}/{images.length}
                    </div>
                )}
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
                <div className="flex justify-center overflow-x-auto w-full mt-2">
                    <div className="flex">
                        {showBullets && images?.slice(startBulletIndex, endBulletIndex).map((_, index: number) => (
                            <div
                                key={startBulletIndex + index}
                                className={`
                                    w-2.5
                                    h-2.5
                                    rounded-full
                                    mx-1
                                    cursor-pointer
                                    transition-colors
                                    ${startBulletIndex + index === currentIndex ? "bg-black" : "bg-gray-300"}
                                `}
                            ></div>
                        ))}
                    </div>
                </div>
                {enableNavigationButtons && (
                    <div className="flex justify-between mt-4">
                        <button onClick={this.handlePrevClick} className="btn btn-primary">❮</button>
                        <button onClick={this.handleNextClick} className="btn btn-primary">❯</button>
                    </div>
                )}
            </div>
        );
    }
}
