import useCart from "../hooks/useCart"

type PropsType = {
    viewCart: boolean
}

const Footer = ({viewCart}: PropsType) =>{
    const {totalItems,totalPrice} = useCart()

    const year: number = new Date().getFullYear()

    const pageContent = viewCart
        ? <p>Shopping Cart &copy; {year}</p>
        : (
            <>
                <p>Totoal Items: {totalItems}</p>
                <p>Totoal Price: {totalPrice}</p>
                <p>Shooping Cart &copy; {year}</p>
            </>
        )

    const content = (
        <footer className="footer">
            {pageContent}
        </footer>
    )
    
    return content
}

export default Footer