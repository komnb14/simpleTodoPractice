

const headlessChildrenChecker = (children:any) => {
    return !children || typeof children !== 'function';
}

export default headlessChildrenChecker;
