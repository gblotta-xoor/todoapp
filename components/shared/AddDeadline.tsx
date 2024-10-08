"use client";

import { setDeadline } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { BiCustomize } from "react-icons/bi";
import { useState } from "react";
import Button from "../ui/Button";
import { todoType } from "@/types/todoTypes";

const AddDeadline = ({ todo }: { todo: todoType }) => {
    const [deadlineTodo, setDeadlineTodo] = useState(false);

    const handleEdit = () => {
        setDeadlineTodo(!deadlineTodo);
    };

    const handleSubmit = () => {
        setDeadlineTodo(false);
    };
    return (
        <div className="flex gap-5 items-center">
            <Button
                onClick={handleEdit}
                text={<BiCustomize />}
                actionButton
            />

            {deadlineTodo ? (
                <Form action={setDeadline} onSubmit={handleSubmit}>
                    <Input
                        name="inputId"
                        value={todo.id}
                        type="hidden"
                    />
                    <div className="flex justify-center">
                        <Input
                            type="text"
                            name="newDeadline"
                            placeholder="Add deadline..."
                        />

                        <Button type="submit" text="Save" />
                    </div>
                </Form>
            ) : null}
        </div>
    );
};

export default AddDeadline;
