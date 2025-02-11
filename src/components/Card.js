"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const image_1 = __importDefault(require("next/image"));
const Card = ({ title, desc, img, tags }) => {
    return (<div className='border border-accent w-[300px] sm:w-[350px]' data-aos="zoom-in-up">
            <div>
                <image_1.default className='w-[300px] sm:w-[350px] h-auto' src={img} width={350} height={350} alt={title}/>
            </div>
            <div className='p-4 space-y-4'>
                <div className='text-4xl font-extralight'>{title}</div>
                <div className='text-lg font-medium'>{desc}</div>
                <div>{tags.map((el) => (<div className='tags' key={el}>{el}
                    </div>))}

                </div>

            </div>
        </div>);
};
exports.default = Card;
