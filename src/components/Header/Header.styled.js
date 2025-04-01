import styled from "styled-components";
import { Hover01, Hover02, Hover03 } from "../../global.styled";

export const Header = styled.header`
    width: 100%;
    margin: 0 auto;
    background-color: ${({theme}) => theme.headerBg};
`

export const HeaderBlock = styled.div`
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`

export const HeaderLogo = styled.div`
    img {
        width: 85px;
    }
`

export const HeaderNav = styled.div`
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderPopUserSet = styled.div`
    display: block;
    position: absolute;
    top: 61px;
    right: 0;
    width: 213px;
    height: 205px;
    border-radius: 10px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    background: ${({theme}) => theme.headerPopUserSetBg};
    box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
    padding: 34px;
    text-align: center;
    z-index: 2;
`

export const PopUserSetButton = styled.button`
    width: 72px;
    height: 30px;
    background: transparent;
    border-radius: 4px;
    border: 1px solid ${({theme}) => theme.headerUser};
    a {
        color: ${({theme}) => theme.headerUser};
    }
    ${Hover03}
`;

export const HeaderBtnNew = styled.button`
    width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565EEF;
    color: #FFFFFF;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;
    a {
        color: #FFFFFF;
    }

    ${Hover01}
`

export const HeaderUser = styled.a`
    height: 20px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    color: ${({theme}) => theme.headerUser};

    &::after {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 1px;
        border-left: 1.9px solid ${({theme}) => theme.headerUser};
        border-bottom: 1.9px solid ${({theme}) => theme.headerUser};
        transform: rotate(-45deg);
        margin: -6px 0 0 5px;
        padding: 0;
    }

    ${Hover02}
`