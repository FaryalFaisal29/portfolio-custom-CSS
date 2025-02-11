"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Heading = ({ title }) => {
    return (<div className='text-center text-4xl pb-8'>
        <p className='border-b-4 inline-block pb-2'>{title}</p>
      
    </div>);
};
exports.default = Heading;
