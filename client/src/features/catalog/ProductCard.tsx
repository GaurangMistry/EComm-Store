import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";

interface Props {
    product: Product;
}

export default function ProductCard({product}: Props){
    return(
        <Card>
            <CardHeader 
                avatar={
                    <Avatar sx={{bgcolor:'secondary.main'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: 'primary.main'}
                }}
            />
            <CardActionArea>
            <CardMedia
                sx={{height: 140, backgroundSize: 'contain', bgcolor:'primary.main' }}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                    ${(product.price / 100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
                Add to Cart
            </Button>
            <Button size="small" component={Link} to={`/catalog/${product.id}`}>
                View
            </Button>
            </CardActions>
        </Card>

    )
}