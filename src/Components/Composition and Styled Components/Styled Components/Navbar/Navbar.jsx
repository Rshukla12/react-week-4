import styled from "styled-components";

const NavbarWrapper = styled.div`
    width: 91%;
    padding: 1% 5% 1.5%;
    position: fixed;
    height: 3rem;
    background-color: #111111;
`;

const NavLinksWrapper = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: end;
`;

const NavLinks = styled.div`
    padding: 1rem;
    color: #f3f3f3;
    @media ( max-width: 768px ) {
        font-size: 0.7rem;
        padding: 0.5rem;
        margin-top: 0.75rem;
    }
`;

const PromoLink = styled(NavLinks)`
    background-color: #1254a5;
`;

const Icon = styled.div`
    position: absolute;
    left: 3rem;
    top: 1.75rem;
    color: #f3f3f3;
    @media (max-width: 768px) {
        display: none;
    }
`;

const Navbar = () => {
    return (
        <NavbarWrapper>
            <Icon>Icon</Icon>
            <NavLinksWrapper>
                <PromoLink>Watch Now</PromoLink>
                <NavLinks>Explore</NavLinks>
                <NavLinks>Contact Us</NavLinks>
                <NavLinks>About Us</NavLinks>
            </NavLinksWrapper>
        </NavbarWrapper>
    )
};

export default Navbar;