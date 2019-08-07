import React from 'react';
import { Skeleton, SkeletonWrapper } from './style';

const SkeltonLoader = (props) => {
    return ( 
        <SkeletonWrapper>
            <Skeleton className="thumbnail"></Skeleton>
            <Skeleton className="name"></Skeleton>
            <Skeleton className="email"></Skeleton>
        </SkeletonWrapper>
     );
}
 
export default SkeltonLoader;