import React from 'react';
import Head from 'next/head';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NextLink from 'next/link';
import Image from 'next/image';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Edvora</title>
      </Head>
      {/* Navbar */}
      <header>
        <Navbar expand="md">
          <Container>
            <Navbar.Brand href="#home">Edvora</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NextLink href="/" passHref>
                  <Nav.Link>Dhruv Singh</Nav.Link>
                </NextLink>
                <NextLink href="/" passHref>
                  <Nav.Link className="avatar">
                    {/* <Image
                      src="/images/2.png"
                      alt={'user pic'}
                      width="50"
                      height="50"
                    /> */}
                  </Nav.Link>
                </NextLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      {/* Main Content */}
      <main className={'app'}>
        <Container>{children}</Container>
      </main>
      {/* Footer */}
      <footer>footer</footer>
    </>
  );
};

export default Layout;
