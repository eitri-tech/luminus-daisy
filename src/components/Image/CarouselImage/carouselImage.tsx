import { Component } from "react";
import CommonProps from "../../commonProps";

interface CarouselImageProps extends CommonProps {
    images: ImageProps[];
    itemClassName?: string;
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
            endBulletIndex: Math.min(5, props.images.length)
        };
    }

    updateBulletRange = (newIndex: number) => {
        const { images } = this.props;
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
            return { currentIndex: newIndex };
        });
    };

    handleNextClick = () => {
        this.setState((prevState: CarouselImageState) => {
            const newIndex = prevState.currentIndex === this.props.images.length - 1 ? 0 : prevState.currentIndex + 1;
            this.updateBulletRange(newIndex);
            return { currentIndex: newIndex };
        });
    };

    handleBulletClick = (index: number) => {
        this.updateBulletRange(index);
        this.setState({ currentIndex: index });
    };

    render() {
        const { className = "", id, images, itemClassName } = this.props;
        const { currentIndex, startBulletIndex, endBulletIndex } = this.state;

        if (!images?.length) {
            console.warn("CarouselImage: No images provided");
        }

        return (
            <div data-e="CarouselImage" id={id} className={`carousel ${className}`}>
                <span>{images?.length}</span>
                {images?.map((image: ImageProps, index: number) => (
                    <div
                        key={`${index}-${image.alt}`}
                        data-e="CarouselImageItem"
                        className={`carousel-item ${itemClassName}`}
                        onClick={image.onClick}
                    >
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
        );
    }
}
