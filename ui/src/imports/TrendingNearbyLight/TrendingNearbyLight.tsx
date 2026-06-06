import svgPaths from "./svg-rb5fl1f8o3";
import imgOverlayShadow from "./bc2491377c82e8e7358fd8e7ea2a496c5d9ebcd5.png";
import imgOverlayShadow1 from "./45bcb10c80da88789c0f3e9277ff4eaa69392f08.png";
import imgOverlayShadow2 from "./3a440e03dcc234321433ce88c3b57cf59bc9bdd6.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Trending Now</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">{`What's hot in your area today`}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[221.98px]" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4d41df] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">View Map</p>
      </div>
    </div>
  );
}

function TrendingSectionTitle() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Trending Section Title">
      <Container />
      <Button />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 10.5">
        <g id="Container">
          <path d={svgPaths.p11e7d100} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#4d41df] content-stretch flex gap-[4px] items-center left-[16px] px-[12px] py-[4px] rounded-[9999px] top-[16px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.32px_0_0] rounded-[9999px] shadow-[0px_10px_25px_-5px_rgba(108,99,255,0.25)]" data-name="Overlay+Shadow" />
      <Container2 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">#1 Trending</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[32px]">Midnight Noodle Market</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p8e10ae0} fill="var(--fill-0, white)" fillOpacity="0.9" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container6 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
        <p className="leading-[24px]">8PM - 12AM</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[10.667px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 10.6667">
        <g id="Container">
          <path d={svgPaths.p45c1540} fill="var(--fill-0, white)" fillOpacity="0.9" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container8 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
        <p className="leading-[24px]">1.2k joined</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pb-[8px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container7 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#4d41df] content-stretch flex items-center justify-center py-[12px] relative rounded-[9999px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_25px_-5px_rgba(108,99,255,0.25)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Join the Vibe</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[8px] items-start left-0 p-[24px] right-0" data-name="Container">
      <Heading1 />
      <Container4 />
      <Button1 />
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[480px] overflow-clip relative rounded-[12px] shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.06)] shrink-0 w-[331.5px]" data-name="Overlay+Shadow">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-22.4%] max-w-none top-0 w-[144.8%]" src={imgOverlayShadow} />
      </div>
      <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] inset-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0.2)]" data-name="Gradient" />
      <Background />
      <Container3 />
    </div>
  );
}

function TrendingCard() {
  return (
    <div className="absolute bottom-[24px] content-stretch flex flex-col items-start left-[16px] min-w-[331.5px] top-[24px]" data-name="Trending Card 1">
      <OverlayShadow />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p21398000} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#006b5c] content-stretch flex gap-[4px] items-center left-[16px] px-[12px] py-[4px] rounded-[9999px] top-[16px]" data-name="Background">
      <Container9 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Top Rated</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[32px]">Neon Dreams Expo</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[10.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 13.3333">
        <g id="Container">
          <path d={svgPaths.p3d09b280} fill="var(--fill-0, white)" fillOpacity="0.9" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container13 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
        <p className="leading-[24px]">Hayes Valley</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[13.317px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3167 13.3333">
        <g id="Container">
          <path d={svgPaths.p36ea0b80} fill="var(--fill-0, white)" fillOpacity="0.9" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container15 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
        <p className="leading-[24px]">$15 entry</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pb-[8px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container14 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center py-[12px] relative rounded-[9999px] shrink-0 w-full" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4d41df] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Get Tickets</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[8px] items-start left-0 p-[24px] right-0" data-name="Container">
      <Heading2 />
      <Container11 />
      <Button2 />
    </div>
  );
}

function OverlayShadow1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[480px] overflow-clip relative rounded-[12px] shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.06)] shrink-0 w-[331.5px]" data-name="Overlay+Shadow">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-22.4%] max-w-none top-0 w-[144.8%]" src={imgOverlayShadow1} />
      </div>
      <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] inset-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0.2)]" data-name="Gradient" />
      <Background1 />
      <Container10 />
    </div>
  );
}

function TrendingCard1() {
  return (
    <div className="absolute bottom-[24px] content-stretch flex flex-col items-start left-[363.5px] min-w-[331.5px] top-[24px]" data-name="Trending Card 2">
      <OverlayShadow1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[9.931px] relative shrink-0 w-[9.942px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.94167 9.93109">
        <g id="Container">
          <path d={svgPaths.p29edf680} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#6e7583] content-stretch flex gap-[4px] items-center left-[16px] px-[12px] py-[4px] rounded-[9999px] top-[16px]" data-name="Background">
      <Container16 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Community</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[32px] mb-0">Dolores Park Sunrise</p>
        <p className="leading-[32px]">Yoga</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.3333">
        <g id="Container">
          <path d={svgPaths.p270cf300} fill="var(--fill-0, white)" fillOpacity="0.9" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container20 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
        <p className="leading-[24px]">Every Sunday</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[12.233px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12.2333">
        <g id="Container">
          <path d={svgPaths.p4f58400} fill="var(--fill-0, white)" fillOpacity="0.9" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container22 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
        <p className="leading-[24px]">Free</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pb-[8px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container21 />
    </div>
  );
}

function Button3() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center px-px py-[13px] relative rounded-[9999px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">RSVP Now</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[8px] items-start left-0 p-[24px] right-0" data-name="Container">
      <Heading3 />
      <Container18 />
      <Button3 />
    </div>
  );
}

function OverlayShadow2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[480px] overflow-clip relative rounded-[12px] shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.06)] shrink-0 w-[331.5px]" data-name="Overlay+Shadow">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-22.4%] max-w-none top-0 w-[144.8%]" src={imgOverlayShadow2} />
      </div>
      <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] inset-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0.2)]" data-name="Gradient" />
      <Background2 />
      <Container17 />
    </div>
  );
}

function TrendingCard2() {
  return (
    <div className="absolute bottom-[24px] content-stretch flex flex-col items-start left-[711px] min-w-[331.5px] top-[24px]" data-name="Trending Card 3">
      <OverlayShadow2 />
    </div>
  );
}

function SectionHorizontalScrollHeroCardsTop() {
  return (
    <div className="h-[528px] overflow-auto relative shrink-0 w-[390px]" data-name="Section - Horizontal Scroll Hero Cards (Top 3)">
      <TrendingCard />
      <TrendingCard1 />
      <TrendingCard2 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#4d41df] content-stretch flex flex-col items-center justify-center left-0 px-[20px] py-[8px] rounded-[9999px] top-[8px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_25px_-5px_rgba(108,99,255,0.25)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">All Nearby</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#f6f2ff] content-stretch flex flex-col items-center justify-center left-[126.56px] px-[20px] py-[8px] rounded-[9999px] top-[8px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Music</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#f6f2ff] content-stretch flex flex-col items-center justify-center left-[219.94px] px-[20px] py-[8px] rounded-[9999px] top-[8px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Coffee Shops</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#f6f2ff] content-stretch flex flex-col items-center justify-center left-[370.69px] px-[20px] py-[8px] rounded-[9999px] top-[8px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Art</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[#f6f2ff] content-stretch flex flex-col items-center justify-center left-[441.23px] px-[20px] py-[8px] rounded-[9999px] top-[8px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Nightlife</p>
      </div>
    </div>
  );
}

function SectionCategoryChips() {
  return (
    <div className="h-[56px] overflow-auto relative shrink-0 w-full" data-name="Section - Category Chips">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[20px] w-full">
        <p className="leading-[28px]">Nearby Stories</p>
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="max-w-[24px] relative shrink-0 size-[24px]" data-name="User">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src="fd5926a6c56ed82d2a67b2efd3d0869219963188.png" />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Container">
      <User />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">@maya_sf</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function CoffeeStory() {
  return (
    <div className="aspect-[145/145] relative rounded-[8px] shrink-0 w-full" data-name="Coffee Story">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src="996db6cb13d7c352af2456aed579db39195f6b3c.png" />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[16px] w-full">
          <p className="leading-[20px] mb-0">{`Best oat latte I've`}</p>
          <p className="leading-[20px] mb-0">had in Mission.</p>
          <p className="leading-[20px] mb-0">The vibes are</p>
          <p className="leading-[20px]">immaculate ✨</p>
        </div>
      </div>
    </div>
  );
}

function Story() {
  return (
    <div className="absolute bg-[#fcf8ff] left-0 right-[187px] rounded-[12px] top-0" data-name="Story 1">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[13px] relative rounded-[inherit] size-full">
        <Container24 />
        <CoffeeStory />
        <Container27 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c7c4d8] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function User1() {
  return (
    <div className="max-w-[24px] relative shrink-0 size-[24px]" data-name="User">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src="a838e3c2ce90d6e109b6d153f9822a456a5a70e9.png" />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Container">
      <User1 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">@jordan_dev</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[16px] w-full">
          <p className="leading-[20px] mb-0">Anyone heading to</p>
          <p className="leading-[20px] mb-0">the hackathon at</p>
          <p className="leading-[20px]">the Pier? 🚀</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(103,93,249,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(77,65,223,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[13px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4d41df] text-[16px] whitespace-nowrap">
          <p className="leading-[24px] mb-0">Replying to</p>
          <p className="leading-[24px]">Jordan</p>
        </div>
      </div>
    </div>
  );
}

function Story1() {
  return (
    <div className="absolute bg-[#fcf8ff] left-0 right-[187px] rounded-[12px] top-[315px]" data-name="Story 2">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[13px] relative rounded-[inherit] size-full">
        <Container28 />
        <Container31 />
        <OverlayBorder />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c7c4d8] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function User2() {
  return (
    <div className="max-w-[24px] relative shrink-0 size-[24px]" data-name="User">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src="e57ac3d7bb86ed711a223864ea2c5d1814f4e865.png" />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Container">
      <User2 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">@sf_explorer</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function SunsetStory() {
  return (
    <div className="aspect-[145/145] relative rounded-[8px] shrink-0 w-full" data-name="Sunset Story">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src="f5b5141732c39e2cd74ca4c7c7dd7e1b5740aa78.png" />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[16px] w-full">
          <p className="leading-[20px] mb-0">Golden hour at the</p>
          <p className="leading-[20px] mb-0">Presidio hit</p>
          <p className="leading-[20px]">different today. 🌅</p>
        </div>
      </div>
    </div>
  );
}

function Story2() {
  return (
    <div className="absolute bg-[#fcf8ff] left-[187px] right-0 rounded-[12px] top-0" data-name="Story 3">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[13px] relative rounded-[inherit] size-full">
        <Container32 />
        <SunsetStory />
        <Container35 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c7c4d8] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function User3() {
  return (
    <div className="max-w-[24px] relative shrink-0 size-[24px]" data-name="User">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src="1d8eb48d295d49c5ebe720c01f09781eceec53d7.png" />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Container">
      <User3 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">@liam_vibe</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[16px] w-full">
          <p className="leading-[20px] mb-0">Secret show at</p>
          <p className="leading-[20px] mb-0">The Fillmore</p>
          <p className="leading-[20px] mb-0">tonight! Check the</p>
          <p className="leading-[20px] mb-0">Locly map for the</p>
          <p className="leading-[20px]">pin. 🎸🤫</p>
        </div>
      </div>
    </div>
  );
}

function Story3() {
  return (
    <div className="absolute bg-[#fcf8ff] left-[187px] right-0 rounded-[12px] top-[295px]" data-name="Story 4">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[13px] relative rounded-[inherit] size-full">
        <Container36 />
        <Container39 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c7c4d8] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[523px] relative shrink-0 w-full" data-name="Container">
      <Story />
      <Story1 />
      <Story2 />
      <Story3 />
    </div>
  );
}

function SectionNearbyStoriesMasonryGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[32px] relative shrink-0 w-full" data-name="Section - Nearby Stories Masonry Grid">
      <Heading4 />
      <Container23 />
    </div>
  );
}

function Main() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Main">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] pb-[96px] pt-[80px] px-[16px] relative size-full">
          <TrendingSectionTitle />
          <SectionHorizontalScrollHeroCardsTop />
          <SectionCategoryChips />
          <SectionNearbyStoriesMasonryGrid />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 size-[16.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3333 16.3333">
        <g id="Container">
          <path d={svgPaths.p28e509c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonFab() {
  return (
    <div className="absolute bg-[#4d41df] bottom-[96px] content-stretch flex items-center justify-center right-[24px] rounded-[9999px] size-[56px]" data-name="Button - FAB">
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 right-0 rounded-[9999px] shadow-[0px_10px_25px_-5px_rgba(108,99,255,0.25)] size-[56px]" data-name="Button - FAB:shadow" />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #4D41DF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4d41df] text-[20px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[28px]">San Francisco, CA</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #464555)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <Container45 />
    </div>
  );
}

function Profile() {
  return (
    <div className="max-w-[32px] relative shrink-0 size-[30px]" data-name="Profile">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-[-3.33%] max-w-none size-[106.67%] top-[-3.33%]" src="b935b05d9cc17f6672539b84c5dbf66c8862db5b.png" />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Profile />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c7c4d8] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Button9 />
      <Border />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(252,248,255,0.8)] content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] top-0 w-[390px]" data-name="Header - TopAppBar">
      <Container41 />
      <Container44 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p12a32500} fill="var(--fill-0, #464555)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">Home</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p20fd7a00} fill="var(--fill-0, #4D41DF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d41df] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">Discover</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(103,93,249,0.2)] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[4px] relative size-full">
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2d8e4cc0} fill="var(--fill-0, #464555)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">Create</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1fe7b600} fill="var(--fill-0, #464555)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">Chats</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container55 />
        <Container56 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #464555)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">Profile</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container58 />
        <Container59 />
      </div>
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-[rgba(252,248,255,0.8)] bottom-0 content-stretch flex gap-[25.2px] h-[80px] items-center left-0 pb-[16px] pl-[28.58px] pr-[28.63px] pt-px w-[390px]" data-name="BottomNavBar">
      <div aria-hidden="true" className="absolute border-[#c7c4d8] border-solid border-t inset-0 pointer-events-none" />
      <Container46 />
      <Overlay />
      <Container51 />
      <Container54 />
      <Container57 />
    </div>
  );
}

export default function TrendingNearbyLight() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(252, 248, 255) 0%, rgb(252, 248, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Trending Nearby (Light)">
      <Main />
      <ButtonFab />
      <HeaderTopAppBar />
      <BottomNavBar />
    </div>
  );
}