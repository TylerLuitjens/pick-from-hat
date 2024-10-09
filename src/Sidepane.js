import React from "react";
import { useForm } from "react-hook-form"
import { TextField, Button } from "@mui/material";
import { Row, Column } from "./StyledComponents";
import { Delete } from "@mui/icons-material";

const Sidepane = ({ items, setItems, setSelectItem }) => {
    const getFormData = () => {
        return { itemToAdd: "" }
    };

    const toTitleCase = (str) => {
        return str.replace(
            /\w\S*/g,
            text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
        );
    };

    const { register, setValue, getValues } = useForm({ defaultValues: getFormData() });
    const addItem = (item) => {
        if (item !== "" && !items.includes(toTitleCase(item))) {
            setItems([...items, toTitleCase(item)]);
        }

        setValue("itemToAdd", "");
    }

    const handleDelete = (idx) => {
        const firstHalf = items.splice(0, idx);
        const secondHalf = items.splice(idx, items.length);
        setItems([...firstHalf, ...secondHalf]);
    };

    const triggerItemSelect = () => { setSelectItem(true); };

    return (
        <Column height="100%" justifyContent="flex-start" margin="10px 15px 0px 15px">
            <Column height="80%" >
                {items?.map((item, idx) => {
                    return (
                        <Row item key={idx} height="5%">
                            {item} <Button size="small" onClick={() => handleDelete(idx)}><Delete /></Button>
                        </Row>
                    );
                })}
            </Column>
            <Row justifyContent="flex-end" alignItems="flex-end" height="10%">
                <Column width="60%" >
                    <TextField variant="outlined" size="small" id="item-text-field" label="Add item" {...register('itemToAdd')} />
                </Column>
                <Column width="20%" margin="0px 5px 0px 5px">
                    <Button variant="contained" color="primary" onClick={() => addItem(getValues("itemToAdd"))}>Add</Button>
                </Column>
                <Column width="20%">
                    <Button variant="contained" color="success" onClick={triggerItemSelect}>Pick Item</Button>
                </Column>
            </Row>
        </Column>
    );
};

export default Sidepane;