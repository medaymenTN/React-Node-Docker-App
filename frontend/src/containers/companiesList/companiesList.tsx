import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContentPlaceHolder from "../../components/common/ContentPlaceHolder";
import { loadCompanies } from "../../store/companyStore/action.async";

const CompaniesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCompanies());
  }, []);
  return <div>
    <ContentPlaceHolder />
    <ContentPlaceHolder />
    <ContentPlaceHolder />
    <ContentPlaceHolder />
    <ContentPlaceHolder />
    <ContentPlaceHolder />
    <ContentPlaceHolder />

  </div>;<ContentPlaceHolder />
};

export default CompaniesList;
