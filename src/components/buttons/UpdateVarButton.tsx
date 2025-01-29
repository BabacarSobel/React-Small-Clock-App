import {Button} from 'react-daisyui';
import {useDispatch} from 'react-redux';
import {updateVar1} from '@store/slices/var1Slice';
import {FC, memo} from "react";

const UpdateVarButton: FC = memo(() => {
    const dispatch = useDispatch();

    const handleUpdate = () => {
        dispatch(updateVar1(new Date().toLocaleString()));
    };

    return (
        <Button className="absolute bottom-4" onClick={handleUpdate}>
            Update VAR1
        </Button>
    );
});

export default UpdateVarButton;