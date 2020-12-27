import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { RootState } from "../redux/root-reducer";
import { CartItem } from "../redux/cart/cart-action.types";
import { removeItemFromCart } from "../redux/cart/cart-action";
import "../styles/app.scss";

const useStyles = makeStyles({
    cardRoot: {
        maxWidth: 345,
    },
    root: {
        flexGrow: 1,
    },
    media: {
        height: 140,
    },
});

const CartPage = (): JSX.Element => {
    const classes = useStyles();
    const cartContent = useSelector((state: RootState) => state.cart.itemsInCart);
    const dispatch = useDispatch();

    const dispatchRemoveItemFromCart = (item: CartItem): void => {
        console.log("remove item from cart");
        dispatch(removeItemFromCart(item));
    };

    return (
        <div className={`${classes.root} mfPurchase`}>
            <Grid container spacing={3}>
                {cartContent.map((item, index) => (
                    <Grid item xs key={index}>
                        <Card className={classes.cardRoot} key={index}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={item.image}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.desc}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => dispatchRemoveItemFromCart(item)}>
                                    Remove from Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default CartPage;
