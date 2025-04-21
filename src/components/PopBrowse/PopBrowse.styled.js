import styled from "styled-components";
import { themeColor } from "../../lib/global.styled.js";
import { CardName } from "../Card/Card.styled.js";
//import { Hover01, Hover03 } from "../../lib/global.styled.js";

export const PopBrouwseStyled = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;
export const PopBrouwseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopBrouwseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const PopBrouwseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrouwseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrouwseTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBroweColor = styled.div`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  width: 115px;
  height: 30px;
  border-radius: 24px;
  background-color: ${({ $themeColor }) =>
        themeColor[$themeColor]?.backgroundColor || "#94a6be"};

  ${CardName} {
    padding-top: 2px;
    text-align: center;
    justify-content: center;
    font-size: 14px;
    color: "#ffffff";
  }
  margin-right: 7px;
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;
export const StatusPsubTtlP = styled.div`
  padding-bottom: 14px;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  color: ${({theme})=> theme.text};
`;

export const PopBrouwseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseTitle = styled.label`
  color: ${({theme})=> theme.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  color: ${({theme})=> theme.text};
  background-color: ${({theme})=> theme.body};
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;


export const PopBrouwseBtnBrouwse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 18px;
  margin-bottom: 48px;
`;

export const BtnGroup = styled.div`
  margin-right: 8px;
`;

export const PopBrowseBtnEdit = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  margin-right: 8px;
  display: none;
`;

export const BtnBor = styled.span`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  margin-right: 8px;
  padding: 10px 14px 10px 14px;
  color: rgb(86, 94, 239);
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

export const BtnBorA = styled(BtnBor)`
color: #565eef;`

export const BtnBg = styled.span`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  margin-right: 8px;
  padding: 10px 14px 10px 14px;
  font-weight: 500;

  a {
    color: #ffffff;
  }

  &:hover {
    background-color: #33399b;
  }
`;