import React from "react";
import { Container } from "./component";
import {ThemeSwitch} from "./ui/ui"

export default function Footer() {
  return (
    <>
      <Container>
        {/* <div className="flex flex-col items-center justify-baseline"> */}
          {/* <div className=""></div> */}
          <div className="flex items-center justify-between">
            <div>Comming soon..</div>
            <div><p>© 2025 <strong>CodesByJit</strong>. All rights reserved.</p></div>
            <div><ThemeSwitch/></div>
          </div>
        {/* </div> */}
      </Container>
    </>
  );
}
