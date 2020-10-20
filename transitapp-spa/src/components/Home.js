import React, { PureComponent } from 'react';
import Register from './Register';

class Home extends PureComponent {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="carousel-caption">
                        <h1>Slajd 1 Lorem ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ullamcorper nibh. Vivamus eget rhoncus metus, tempor tristique odio. Nullam nisl turpis, fringilla ut quam sit amet, aliquet venenatis sem. Fusce dictum sagittis arcu non hendrerit. In ut mollis augue, eu volutpat ligula. </p>
                    </div>
                </div>
                { !this.props.user ? <Register /> : null}
            </div >
        );
    }
}

export default Home;