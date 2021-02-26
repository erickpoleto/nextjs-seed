import React from 'react';
import CustomHead from "../src/components/modules/head";
import {Container, Column, Center} from "../src/components/layout/layout";
import { Button, Typography } from "../src/components/elements/elements";

export default function Home() {
  return (
    <Container>
      <CustomHead title="nextjs-seed"/>
        <Center style={{justifyContent: "center", display: "flex"}}>
          <Column>
            <Typography variant="title" bold="hard" color="white">Welcome</Typography>
            <Button><Typography variant="title" bold="hard"  color="white">more about</Typography></Button>
          </Column>
        </Center>
    </Container>
  )
}
