// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./index.css");

const Components = () => (
  <div id="components">
    <header>Header</header>
    <aside>Sidebar</aside>
    <main>
      <ul>
        <li>Content area</li>
        <li>Content area</li>
        <li>Content area</li>
      </ul>
    </main>
  </div>
);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Helvetica",
  secondary: "Helvetica"
});

const Presentation = props => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide transition={["zoom"]} bgColor="secondary">
      <Heading size={1} fit lineHeight={1} textColor="primary">ReactJS</Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={5}>
        What is it?
      </Text>
      <Text margin="10px 0 0" textColor="tertiary" size={5}>
        Why should I use it?
      </Text>
      <Text margin="10px 0 0" textColor="tertiary" size={5}>
        How do I get started?
      </Text>
    </Slide>

    <Slide transition={["fade"]} bgColor="secondary">
      <Heading size={6} textColor="tertiary">What is React?</Heading>
      <Text textColor="primary">React is one of many JavaScript libraries that enable modern, complex single-page application (SPA) development.</Text>
    </Slide>

    <Slide transition={["fade"]} bgColor="secondary">
      <Heading size={6} textColor="tertiary">Core features</Heading>
      <List textColor="primary">
        <ListItem textColor="tertiary">Virtual DOM</ListItem>
        <ListItem>Componentised architecture</ListItem>
        <ListItem>Unidirectional data-flow</ListItem>
      </List>
    </Slide>

    <Slide transition={["fade"]} bgColor="secondary">
      <Heading size={6} textColor="tertiary">Virtual DOM</Heading>
      <Text textColor="primary">
        The Virtual DOM is a low-cost abstraction of the HTML DOM, used to efficiently compute changes before rendering them.
      </Text>
    </Slide>

    <Slide transition={["fade"]} bgColor="secondary">
      <Heading size={6} textColor="tertiary">Core features</Heading>
      <List textColor="primary">
        <ListItem>Virtual DOM</ListItem>
        <ListItem textColor="tertiary">Componentised architecture</ListItem>
        <ListItem>Unidirectional data-flow</ListItem>
      </List>
    </Slide>

    <Slide transition={["fade"]} bgColor="secondary">
      <Heading size={6} textColor="tertiary">Componentised architecture</Heading>
      <Components />
    </Slide>

    <Slide transition={["fade"]} bgColor="secondary">
      <Heading size={6} textColor="tertiary">Core features</Heading>
      <List textColor="primary">
        <ListItem>Virtual DOM</ListItem>
        <ListItem>Componentised architecture</ListItem>
        <ListItem textColor="tertiary">Unidirectional data-flow</ListItem>
      </List>
    </Slide>

    <Slide transition={["fade"]} bgColor="secondary">
      <Heading size={6} textColor="tertiary">Unidirectional data flow</Heading>
      <Text textColor="primary">
        In React, data flows top-down, while actions (that cause mutations in data) are hoisted up. This concept becomes more prevalent with the introduction of a framework like Flux.
      </Text>
    </Slide>

    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="tertiary">Why choose React?</Heading>
      <List textColor="primary">
        <ListItem>Proven at scale</ListItem>
        <ListItem>Active OSS community</ListItem>
        <ListItem>Easy to learn</ListItem>
        <ListItem>Learn once, write anywhere</ListItem>
      </List>
    </Slide>

    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="tertiary">Understanding React</Heading>
      <List textColor="primary">
        <ListItem>What is a React Component?</ListItem>
        <ListItem>What is State/Props?</ListItem>
        <ListItem>Where can I learn more?</ListItem>
      </List>
    </Slide>
  </Deck>
);

export default Presentation;
