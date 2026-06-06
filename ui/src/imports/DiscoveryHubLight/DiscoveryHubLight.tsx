import svgPaths from "./svg-fnnaib2fed";
import imgAb6AXuCyc6OQzocuG6QQpl5SMBcJ3Mtx3O0E011XiiTEt2Rucyxbh3LLaSyYjzCkvsowc7BAa2PhkIcck0LZrdR3YAh9Fo0NqVfRlprdB3Bmf6Dj4K9PK5TXvLpnxVHxSjwxBEycFhmMhzPhuvpq0WmNb8AZeZ4NDhM8O7WSwg67Nt3HF9AMhUsU56HY7Ge3AoV2T493BAeSChazVk9Z4Ov3Wi02IKe5KdFFyVzDjWtqO8Il04FelJWx2RKmebtgIZb48El5Ihc from "./4a0f10b6c1bc382f25c7babf23a78b99cdd45e6e.png";
import imgAb6AXuANbkpRkXd8APhjRqoObex6VcCNowpFAgOiMtKvSbgXon3Bu8Hr726HpbmH8RVwthIWaTdEVc43XQkkwwcXl18HEFklYzJorpqI39KFwSry8FvxcijwuWnZzP9IakFd5YFfjQZk1LmPfOtOYx9T9OdsWr87P8HxmDos2RuwNeRn0EmE51TmLaaqwivlaPzq5Sq3XiFpxwGhtFiYdIfb7ZCOo6O5AmWwSzVyAoipII844IrNxQltFdMdh5FfZnYsoJ9TFrnX from "./a0dc637f7f3eae6bffb5382785738896935ed88b.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">
        <p className="leading-[normal]">Search activities, communities...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f0ecf9] h-[48px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[48px] pr-[16px] py-[14px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #777587)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-[16px] top-0" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Container2 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#4d41df] bottom-0 content-stretch flex flex-col items-start left-0 px-[16px] py-[6px] rounded-[9999px] top-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">All Nearby</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#eae6f3] bottom-0 content-stretch flex flex-col items-start left-[102.14px] px-[16px] py-[6px] rounded-[9999px] top-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">{`Food & Drinks`}</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#eae6f3] bottom-0 content-stretch flex flex-col items-start left-[224.88px] px-[16px] py-[6px] rounded-[9999px] top-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">Outdoor</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#eae6f3] bottom-0 content-stretch flex flex-col items-start left-[313.5px] px-[16px] py-[6px] rounded-[9999px] top-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">{`Art & Design`}</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[28px] overflow-auto relative shrink-0 w-full" data-name="Container">
      <Background />
      <Background1 />
      <Background2 />
      <Background3 />
    </div>
  );
}

function SearchFilterSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Search & Filter Section">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
        <Container />
        <Container4 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Trending Activities</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4d41df] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">See all</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <Heading />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Ab6AXuCyc6OQzocuG6QQpl5SMBcJ3Mtx3O0E011XiiTEt2Rucyxbh3LLaSyYjzCkvsowc7BAa2PhkIcck0LZrdR3YAh9Fo0NqVfRlprdB3Bmf6Dj4K9PK5TXvLpnxVHxSjwxBEycFhmMhzPhuvpq0WmNb8AZeZ4NDhM8O7WSwg67Nt3HF9AMhUsU56HY7Ge3AoV2T493BAeSChazVk9Z4Ov3Wi02IKe5KdFFyVzDjWtqO8Il04FelJWx2RKmebtgIZb48El5Ihc() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AB6AXuCYC6oQzocuG6qQpl5sMBcJ3MTX3o0e-011xiiTEt2RUCYXBH3LLaSyYJZCkvsowc7bAa2PHKIcck0lZrdR_3yAH9Fo0NQVfRlprdB3Bmf6-DJ4k9pK5TXvLpnxVHxSjwxBEyc_fhmMHZPhuvpq0wmNB8AZeZ4NDhM8O7WSwg67Nt3hF9A-mhUsU56hY7ge3aoV2T493_bAE_sChazVk9z4OV3wi0_2IKe5KdFFyVzDjWTQ-O8Il04felJWx2RKmebtgIZb48el5Ihc">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[173.75%] left-0 max-w-none top-[-36.87%] w-full" src={imgAb6AXuCyc6OQzocuG6QQpl5SMBcJ3Mtx3O0E011XiiTEt2Rucyxbh3LLaSyYjzCkvsowc7BAa2PhkIcck0LZrdR3YAh9Fo0NqVfRlprdB3Bmf6Dj4K9PK5TXvLpnxVHxSjwxBEycFhmMhzPhuvpq0WmNb8AZeZ4NDhM8O7WSwg67Nt3HF9AMhUsU56HY7Ge3AoV2T493BAeSChazVk9Z4Ov3Wi02IKe5KdFFyVzDjWtqO8Il04FelJWx2RKmebtgIZb48El5Ihc} />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.p3d8f00c0} fill="var(--fill-0, #4D41DF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">300m • Mission District</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[4px] bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[4px] items-center left-[12px] px-[8px] py-[4px] rounded-[8px] top-[12px]" data-name="Overlay+OverlayBlur">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[160px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Ab6AXuCyc6OQzocuG6QQpl5SMBcJ3Mtx3O0E011XiiTEt2Rucyxbh3LLaSyYjzCkvsowc7BAa2PhkIcck0LZrdR3YAh9Fo0NqVfRlprdB3Bmf6Dj4K9PK5TXvLpnxVHxSjwxBEycFhmMhzPhuvpq0WmNb8AZeZ4NDhM8O7WSwg67Nt3HF9AMhUsU56HY7Ge3AoV2T493BAeSChazVk9Z4Ov3Wi02IKe5KdFFyVzDjWtqO8Il04FelJWx2RKmebtgIZb48El5Ihc />
        <OverlayOverlayBlur />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Sunset Rooftop Yoga</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[12px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 12">
        <g id="Container">
          <path d={svgPaths.p33a5df00} fill="var(--fill-0, #464555)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">12 participants joined</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[8px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#4d41df] content-stretch flex items-center justify-center py-[8px] relative rounded-[9999px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.2px_0_0] rounded-[9999px] shadow-[0px_10px_25px_-5px_rgba(77,65,223,0.25)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Join Now</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-[183.8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start p-[16px] relative size-full">
        <Heading1 />
        <Container11 />
        <Button1 />
      </div>
    </div>
  );
}

function ActivityCard() {
  return (
    <div className="absolute bg-[#fcf8ff] bottom-0 left-0 min-w-[280px] rounded-[12px] top-0" data-name="Activity Card 1">
      <div className="content-stretch flex flex-col items-start min-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Container7 />
        <Container10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c7c4d8] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Ab6AXuANbkpRkXd8APhjRqoObex6VcCNowpFAgOiMtKvSbgXon3Bu8Hr726HpbmH8RVwthIWaTdEVc43XQkkwwcXl18HEFklYzJorpqI39KFwSry8FvxcijwuWnZzP9IakFd5YFfjQZk1LmPfOtOYx9T9OdsWr87P8HxmDos2RuwNeRn0EmE51TmLaaqwivlaPzq5Sq3XiFpxwGhtFiYdIfb7ZCOo6O5AmWwSzVyAoipII844IrNxQltFdMdh5FfZnYsoJ9TFrnX() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AB6AXuANbkpRKXd8aPHJRqoOBEX6VcCNowpFAgOIMtKvSBGXon3bu8hr726hpbmH8RVwthIWa_TdEVc43XQkkwwcXl18hEFklYzJorpqI39K_FwSRY8FvxcijwuWNZzP9IakFd5YFfjQZk1LmPFOt_oYX9T9OdsWr87p8HXMDos2RUWNeRN0emE51tmLaaqwivlaPzq5SQ3-XI-fpxwGhtFiYdIFB7zCOo6o5AmWWSzVyAOIP-iI844IRNxQltFdMDH5ffZN-YsoJ9t_FrnX">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[173.75%] left-0 max-w-none top-[-36.87%] w-full" src={imgAb6AXuANbkpRkXd8APhjRqoObex6VcCNowpFAgOiMtKvSbgXon3Bu8Hr726HpbmH8RVwthIWaTdEVc43XQkkwwcXl18HEFklYzJorpqI39KFwSry8FvxcijwuWnZzP9IakFd5YFfjQZk1LmPfOtOYx9T9OdsWr87P8HxmDos2RuwNeRn0EmE51TmLaaqwivlaPzq5Sq3XiFpxwGhtFiYdIfb7ZCOo6O5AmWwSzVyAoipII844IrNxQltFdMdh5FfZnYsoJ9TFrnX} />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.p3d8f00c0} fill="var(--fill-0, #4D41DF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">800m • Hayes Valley</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur1() {
  return (
    <div className="absolute backdrop-blur-[4px] bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[4px] items-center left-[12px] px-[8px] py-[4px] rounded-[8px] top-[12px]" data-name="Overlay+OverlayBlur">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[160px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Ab6AXuANbkpRkXd8APhjRqoObex6VcCNowpFAgOiMtKvSbgXon3Bu8Hr726HpbmH8RVwthIWaTdEVc43XQkkwwcXl18HEFklYzJorpqI39KFwSry8FvxcijwuWnZzP9IakFd5YFfjQZk1LmPfOtOYx9T9OdsWr87P8HxmDos2RuwNeRn0EmE51TmLaaqwivlaPzq5Sq3XiFpxwGhtFiYdIfb7ZCOo6O5AmWwSzVyAoipII844IrNxQltFdMdh5FfZnYsoJ9TFrnX />
        <OverlayOverlayBlur1 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Local Foodie Meetup</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[12px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 12">
        <g id="Container">
          <path d={svgPaths.p33a5df00} fill="var(--fill-0, #464555)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">8 participants joined</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[8px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#4d41df] content-stretch flex items-center justify-center py-[8px] relative rounded-[9999px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.27px_0_0] rounded-[9999px] shadow-[0px_10px_25px_-5px_rgba(77,65,223,0.25)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Join Now</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-[178.73px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start p-[16px] relative size-full">
        <Heading2 />
        <Container18 />
        <Button2 />
      </div>
    </div>
  );
}

function ActivityCard1() {
  return (
    <div className="absolute bg-[#fcf8ff] bottom-0 left-[296px] min-w-[280px] rounded-[12px] top-0" data-name="Activity Card 2">
      <div className="content-stretch flex flex-col items-start min-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Container14 />
        <Container17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c7c4d8] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[284px] overflow-auto relative shrink-0 w-full" data-name="Container">
      <ActivityCard />
      <ActivityCard1 />
    </div>
  );
}

function SectionTrendingActivities() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - Trending Activities">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Popular Communities</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4d41df] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Discover</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Button3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2ef76100} fill="var(--fill-0, #007262)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#65fade] relative rounded-[8px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[14px] tracking-[0.14px] w-full">
          <p className="leading-[20px]">SF Creatives</p>
        </div>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f6f2ff] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">Art</p>
        </div>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#f6f2ff] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">Design</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[19px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Background5 />
        <Background6 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[10px] w-full">
          <p className="leading-[15px]">2.4k active locals</p>
        </div>
      </div>
    </div>
  );
}

function CommunityCard() {
  return (
    <div className="bg-[#fcf8ff] col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Community Card 1">
      <div aria-hidden="true" className="absolute border border-[#c7c4d8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[17px] relative size-full">
        <Background4 />
        <Heading4 />
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 21.5">
        <g id="Container">
          <path d={svgPaths.p2058000} fill="var(--fill-0, #4D41DF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(103,93,249,0.2)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[14px] tracking-[0.14px] w-full">
          <p className="leading-[20px]">Park Run Club</p>
        </div>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#f6f2ff] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">Sports</p>
        </div>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#f6f2ff] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">Fitness</p>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[19px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Background7 />
        <Background8 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[10px] w-full">
          <p className="leading-[15px]">1.1k active locals</p>
        </div>
      </div>
    </div>
  );
}

function CommunityCard1() {
  return (
    <div className="bg-[#fcf8ff] col-2 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Community Card 2">
      <div aria-hidden="true" className="absolute border border-[#c7c4d8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[17px] relative size-full">
        <Overlay />
        <Heading5 />
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p366fd780} fill="var(--fill-0, #555C6A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(192,199,214,0.2)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container29 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[14px] tracking-[0.14px] w-full">
          <p className="leading-[20px]">Coffee Nomads</p>
        </div>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#f6f2ff] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">Networking</p>
        </div>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#f6f2ff] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">Tech</p>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[19px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Background9 />
        <Background10 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[10px] w-full">
          <p className="leading-[15px]">850 active locals</p>
        </div>
      </div>
    </div>
  );
}

function CommunityCard2() {
  return (
    <div className="bg-[#fcf8ff] col-1 justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Community Card 3">
      <div aria-hidden="true" className="absolute border border-[#c7c4d8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[17px] relative size-full">
        <Overlay1 />
        <Heading6 />
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[16.992px] relative shrink-0 w-[16.995px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9955 16.9923">
        <g id="Container">
          <path d={svgPaths.p12cee600} fill="var(--fill-0, #006B5C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(65,221,194,0.2)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container32 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[14px] tracking-[0.14px] w-full">
          <p className="leading-[20px]">Green Living</p>
        </div>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#f6f2ff] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">Eco</p>
        </div>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#f6f2ff] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">Gardening</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[19px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Background11 />
        <Background12 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[10px] w-full">
          <p className="leading-[15px]">3.2k active locals</p>
        </div>
      </div>
    </div>
  );
}

function CommunityCard3() {
  return (
    <div className="bg-[#fcf8ff] col-2 justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Community Card 4">
      <div aria-hidden="true" className="absolute border border-[#c7c4d8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[17px] relative size-full">
        <Overlay2 />
        <Heading7 />
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__160px_160px] relative shrink-0 w-full" data-name="Container">
      <CommunityCard />
      <CommunityCard1 />
      <CommunityCard2 />
      <CommunityCard3 />
    </div>
  );
}

function SectionPopularCommunities() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section - Popular Communities">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[16px] relative size-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Suggested for You</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4d41df] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">View all</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Button4 />
    </div>
  );
}

function Ab6AXuCwwLua4NwgLl6BboJNza5A61AcBnYki2VuPtnPeyBPyfXckRbCq7Di0V5P9EWcFq37StVxY3ZszHqVdDsAOk2Xrf1KhjL0TsWHzsy26VldDjLtYYbBkxaGp3ImWqIwRrLbfAcuih2Zd1GpogxEKrU7UxTqGsyNjQgvySrnGq4AL5Nw3Kl8Bn551XxmvgpHn4QDmflRsAi1H9Q6JsGjUfk2HmYmcCyAyEfTw6PjxkA95Lbqk1M5WEkClnuXmQcOv2AtIf() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AB6AXuCWWLua4nwg__ll6BboJNza5A6_1-acBNYki2vuPtnPeyB_pyfXckRBCq7DI0V5P9eWCFq37StVxY3ZszHqVDDsAOk2XRF1khjL0tsWHzsy26vldDJLtYYb_bkxaGP3IMWqIwRrLbfAcuih2ZD1gpogxEKrU7-_UXTqGsyNJQgvySRNGq4aL5NW3Kl8BN551xxmvgpHn4qDmflRsAi1-h9q6jsGjUFK2hmYMCCy_AYEfTw6pjxkA95LBQK1M5wEkCLNUXmQcOV2ATIf">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src="33797eef262428a68f0a8324ce86abaf72be0acc.png" />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[48px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Ab6AXuCwwLua4NwgLl6BboJNza5A61AcBnYki2VuPtnPeyBPyfXckRbCq7Di0V5P9EWcFq37StVxY3ZszHqVdDsAOk2Xrf1KhjL0TsWHzsy26VldDjLtYYbBkxaGp3ImWqIwRrLbfAcuih2Zd1GpogxEKrU7UxTqGsyNjQgvySrnGq4AL5Nw3Kl8Bn551XxmvgpHn4QDmflRsAi1H9Q6JsGjUfk2HmYmcCyAyEfTw6PjxkA95Lbqk1M5WEkClnuXmQcOv2AtIf />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#675df9] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Alex Chen</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Designer • 150m away</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[106.41px]" data-name="Container">
      <Heading9 />
      <Container39 />
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Border />
        <Container38 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#4d41df] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[7px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d41df] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[16px]">Connect</p>
        </div>
      </div>
    </div>
  );
}

function Person() {
  return (
    <div className="bg-[#fcf8ff] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Person 1">
      <div aria-hidden="true" className="absolute border border-[#c7c4d8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[13px] relative size-full">
          <Container37 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Ab6AXuCEwyi9EUkrzv3ZOvAAbYtF9DKxVm9U7AtxldPIzP90IpQEjJxA1MelFy9Zji8PaGf6QosrAtkGzfE5GwM6WU4DXogueakzHclZujEnqEbWelx1GGn2VWvnxeBtB2PqnCvMjXefeyZm6O0PdBbIqRxtiS2MSi3XrnzIdyqRvpATuS7QiPbusQsgBbmUox1PvqHtLvEdvLTpe6Bt3EoLn8Nax3UnVQtJZrT3V5QvVCzCaXqHc7Jy0BemS5VwTWh4PwDbdWb9JT() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AB6AXuCEwyi9eUkrzv3ZOvAAbYtF9dKxVM9u7AtxldPIzP90ip-qEjJxA1MELFy9zji8paGf6qosrAtk-GzfE5GwM6wU4dXOGUEAKZHclZUJEnqEBWelx1GGn2vWvnxeBtB2PqnCvMjXefeyZM6o0PDBbIQRxti-s2M-Si3XrnzIdyqRvpATuS7qiPBUSQsgBbmUox1PvqHTLvEdvLTpe6bt3EoLn8NAX3unVQt-JZrT3V5qv_VCzCAXqHC7JY0BemS5vwTWh4PwDBDWb9jT">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src="574a07a95b394b2464edab69b56f99bb51af5888.png" />
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[48px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Ab6AXuCEwyi9EUkrzv3ZOvAAbYtF9DKxVm9U7AtxldPIzP90IpQEjJxA1MelFy9Zji8PaGf6QosrAtkGzfE5GwM6WU4DXogueakzHclZujEnqEbWelx1GGn2VWvnxeBtB2PqnCvMjXefeyZm6O0PdBbIqRxtiS2MSi3XrnzIdyqRvpATuS7QiPbusQsgBbmUox1PvqHtLvEdvLTpe6Bt3EoLn8Nax3UnVQtJZrT3V5QvVCzCaXqHc7Jy0BemS5VwTWh4PwDbdWb9JT />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#c7c4d8] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Sarah Jenkins</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Photographer • 500m away</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[130.88px]" data-name="Container">
      <Heading10 />
      <Container42 />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Border1 />
        <Container41 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#4d41df] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[7px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d41df] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[16px]">Connect</p>
        </div>
      </div>
    </div>
  );
}

function Person1() {
  return (
    <div className="bg-[#fcf8ff] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Person 2">
      <div aria-hidden="true" className="absolute border border-[#c7c4d8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[13px] relative size-full">
          <Container40 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function Ab6AXuArgqn9Z2MyLkqDvb7GvHxpgvMhGlkcKc2Ngp2Vp777ANg1WkvI2I7DrmdSVeBpCxhVRzLl5T8ESc0DoukX03TtxpjvmcHwChOkx8AsJ3APa5QWbNi3Gwiyr1Fu0V7Isu5GOw6ShAzZpEyFofhThsUaUmM9Y5UDkMbfF4WLbYeTqI51DsAfGcvwXxEyKtEIsu0T16Oeq8L3Sa0Hxvy8VF5UEcrYPhCzMEHmzI62FFfOwZuokLupSYV1Q1HKlcdJsvMdoSl() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AB6AXuArgqn9z2my_LkqDVB7gvHxpgvMHGlkc-KC2NGP2Vp777aNG1wkvI2i7drmdSVeBPCxhVRzLL5T8ESc0DoukX03ttxpjvmcHwCHOkx8AsJ3APa5QWbNi3GWIYR1Fu0V7Isu5gOW6shAZ-ZpEYFofhTHSUaUmM9y5U-DKMbfF4wLbYETqI51DsAfGCVWXxEyKtEIsu0T16oeq8L3sa0hxvy8vF5uEcrYPhCz_mEHmzI62fFfOWZuokLupS_Y_V1q1H-KlcdJsvMdoSl3">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src="bed921d2f11fe7383cbfd1eca34639229686d0dc.png" />
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[48px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Ab6AXuArgqn9Z2MyLkqDvb7GvHxpgvMhGlkcKc2Ngp2Vp777ANg1WkvI2I7DrmdSVeBpCxhVRzLl5T8ESc0DoukX03TtxpjvmcHwChOkx8AsJ3APa5QWbNi3Gwiyr1Fu0V7Isu5GOw6ShAzZpEyFofhThsUaUmM9Y5UDkMbfF4WLbYeTqI51DsAfGcvwXxEyKtEIsu0T16Oeq8L3Sa0Hxvy8VF5UEcrYPhCzMEHmzI62FFfOwZuokLupSYV1Q1HKlcdJsvMdoSl />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#c7c4d8] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b24] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Liam Moore</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Product Lead • 1.2km away</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[129.39px]" data-name="Container">
      <Heading11 />
      <Container45 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Border2 />
        <Container44 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#4d41df] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[7px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d41df] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[16px]">Connect</p>
        </div>
      </div>
    </div>
  );
}

function Person2() {
  return (
    <div className="bg-[#fcf8ff] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Person 3">
      <div aria-hidden="true" className="absolute border border-[#c7c4d8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[13px] relative size-full">
          <Container43 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Person />
      <Person1 />
      <Person2 />
    </div>
  );
}

function SectionSuggestedForYou() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section - Suggested for You">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[16px] relative size-full">
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[112px] pt-[80px] relative shrink-0 w-full" data-name="Main">
      <SearchFilterSection />
      <SectionTrendingActivities />
      <SectionPopularCommunities />
      <SectionSuggestedForYou />
    </div>
  );
}

function Container46() {
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
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 right-0 rounded-[9999px] shadow-[0px_10px_25px_-5px_rgba(77,65,223,0.25)] size-[56px]" data-name="Button - FAB:shadow" />
      <Container46 />
    </div>
  );
}

function Container48() {
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

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4d41df] text-[24px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[32px]">Discovery</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container50() {
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

function Button8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container50 />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(252,248,255,0.8)] content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] top-0 w-[390px]" data-name="Header - TopAppBar">
      <Container47 />
      <Button8 />
    </div>
  );
}

function Container52() {
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

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">Home</p>
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

function Container54() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p176f0bb4} fill="var(--fill-0, #4D41DF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d41df] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">Discover</p>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(103,93,249,0.2)] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[4px] relative size-full">
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Container57() {
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

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">Create</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container57 />
        <Container58 />
      </div>
    </div>
  );
}

function Container60() {
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

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">Chats</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container60 />
        <Container61 />
      </div>
    </div>
  );
}

function Container63() {
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

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[16px]">Profile</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container63 />
        <Container64 />
      </div>
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-[rgba(252,248,255,0.8)] bottom-0 content-stretch flex gap-[25.2px] h-[80px] items-center left-0 pb-[16px] pl-[28.58px] pr-[28.63px] pt-px w-[390px]" data-name="BottomNavBar">
      <div aria-hidden="true" className="absolute border-[#c7c4d8] border-solid border-t inset-0 pointer-events-none" />
      <Container51 />
      <Overlay3 />
      <Container56 />
      <Container59 />
      <Container62 />
    </div>
  );
}

export default function DiscoveryHubLight() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(252, 248, 255) 0%, rgb(252, 248, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Discovery Hub (Light)">
      <Main />
      <ButtonFab />
      <HeaderTopAppBar />
      <BottomNavBar />
    </div>
  );
}