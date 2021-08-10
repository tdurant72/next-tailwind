import PropTypes from 'prop-types';
import classnames from 'classnames';

export const PrimaryBtn = ({ children }) => (<button className="w-auto text-base transition duration-500 ease-in-out bg-primary-500 border-primary-700 border-2 ring-primary-500 ring-2 ring-inset shadow hover:bg-primary-700 rounded-md mx-4 my-2 h-auto transform hover:shadow-lg px-4 py-2 text-primary-50">{children}</button>);

export const PrimaryInvertedBtn = ({ children }) => (<button className="w-auto text-base transition duration-500 ease-in-out bg-white-50 border-primary-700 border-1 ring-primary-500 ring-2 ring-inset shadow hover:bg-primary-50 rounded-md mx-4 my-2 h-auto transform hover:shadow-lg px-4 py-2 text-primary-500">{children}</button>);

export const SecondaryBtn = ({ children }) => (<button className="w-auto text-base transition duration-500 ease-in-out bg-secondary-500 border-secondary-700 border-2 ring-secondary-500 ring-2 ring-inset shadow hover:bg-secondary-700 rounded-md mx-4 my-2 h-auto transform hover:shadow-lg px-4 py-2 text-secondary-50">{children}</button>);

export const SecondaryInvertedBtn = ({ children }) => (<button className="w-auto text-base transition duration-500 ease-in-out bg-white-50 border-secondary-700 border-1 ring-secondary-500 ring-2 ring-inset shadow hover:bg-secondary-50 rounded-md mx-4 my-2 h-auto transform hover:shadow-lg px-4 py-2 text-secondary-500">{children}</button>);

export const SuccessBtn = ({ children }) => (<button className="w-auto text-base transition duration-500 ease-in-out bg-green-500 border-green-700 border-2 ring-green-500 ring-2 ring-inset shadow hover:bg-green-700 rounded-md mx-4 my-2 h-auto transform hover:shadow-lg px-4 py-2 text-green-50">{children}</button>);

export const SuccessInvertedBtn = ({ children }) => (<button className="w-auto text-base transition duration-500 ease-in-out bg-white-50 border-green-700 border-1 ring-green-500 ring-2 ring-inset shadow hover:bg-green-50 rounded-md mx-4 my-2 h-auto transform hover:shadow-lg px-4 py-2 text-green-500">{children}</button>);

export const FailBtn = ({ children }) => (<button className="w-auto text-base transition duration-500 ease-in-out bg-red-500 border-red-700 border-2 ring-red-500 ring-2 ring-inset shadow hover:bg-red-700 rounded-md mx-4 my-2 h-auto transform hover:shadow-lg px-4 py-2 text-red-50">{children}</button>);

export const FailInvertedBtn = ({ children }) => (<button className="w-auto text-base transition duration-500 ease-in-out bg-white-50 border-red-700 border-1 ring-red-500 ring-2 ring-inset shadow hover:bg-red-50 rounded-md mx-4 my-2 h-auto transform hover:shadow-lg px-4 py-2 text-red-500">{children}</button>);
