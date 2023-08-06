import styled from "@emotion/styled";
import { Link } from "@remix-run/react";

const Container = styled("div")`
  background-color: #d6d6d6;
`;

export default function Jokes() {
    return (
        <Container>
            <h1>Jokes</h1>
            <p>This route works fine.</p>
            <Link to="/">Back to home</Link>
        </Container>
    );
}
