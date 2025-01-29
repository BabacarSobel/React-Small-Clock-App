import {FC, memo} from 'react';
import {useTime} from "@/hooks";


const LiveClock: FC = memo(() => {
    const time = useTime()
    return <span>{time.toLocaleString()}</span>;
});

export default LiveClock;
