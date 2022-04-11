import {Button} from "./styles"

export function LinkButton({to, text}) {
    return (
        <Button to={to} >{text}</Button>
    )
}