import React from 'react';
import logo from './logo.svg';
import './App.css';
import './base.css';
import './notice.css';


function App() {
  return (
      <div className="notice_wrap">
        <h1>공지 및 소식</h1>
        <div className="search_wrap">
          <select name="" id="" className="select_option">
            <option value="" selected>선택</option>
            <option value="T">제목</option>
            <option value="C">내용</option>
            <option value="A">제목+내용</option>
          </select>
          <input type="text" placeholder="검색어를 입력하세요" />
            <input type="button" className="search_icon" value="" />
        </div>

        <table className="NoticeList_warp">
          <colgroup>
            <col width="10%" />
              <col width="*" />
                <col width="20%" />
                  <col width="10%" />
          </colgroup>
          <thead className="NoticeList_head">
          <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">등록일</th>
            <th scope="col">조회수</th>
          </tr>
          </thead>

          <tbody className="NoticeList_text">
          <tr>
            <td>10</td>
            <td className="NoticeList_title1">게시글 제목 노출 게시글 제목 노출 게시글 제목 노출 게시글 제목 노출 게시글 제목 노출 게시글 제목 노출 게시글 제목 노출 게시글
              제목 노출
            </td>
            <td>2020.01.23</td>
            <td>100</td>
          </tr>
          <tr>
            <td>9</td>
            <td className="NoticeList_title">게시글 제목 노출 게시글 제목 노출 게시글 제목 노출 게시글 제목 노출 게시글 제목 노출 게시글 제목 노출 게시글 제목 노출 게시글
              제목 노출 게시글 제목 노출
            </td>
            <td>2020.01.23</td>
            <td>100</td>
          </tr>
          <tr>
            <td>8</td>
            <td className="NoticeList_title">게시글 제목 노출</td>
            <td>2020.01.23</td>
            <td>100</td>
          </tr>
          <tr>
            <td>7</td>
            <td className="NoticeList_title">게시글 제목 노출</td>
            <td>2020.01.23</td>
            <td>100</td>
          </tr>
          <tr>
            <td>6</td>
            <td className="NoticeList_title">게시글 제목 노출</td>
            <td>2020.01.23</td>
            <td>100</td>
          </tr>
          <tr>
            <td>5</td>
            <td className="NoticeList_title">게시글 제목 노출</td>
            <td>2020.01.23</td>
            <td>100</td>
          </tr>
          <tr>
            <td>4</td>
            <td className="NoticeList_title">게시글 제목 노출</td>
            <td>2020.01.23</td>
            <td>100</td>
          </tr>
          <tr>
            <td>3</td>
            <td className="NoticeList_title">게시글 제목 노출</td>
            <td>2020.01.23</td>
            <td>100</td>
          </tr>
          <tr>
            <td>2</td>
            <td className="NoticeList_title">게시글 제목 노출</td>
            <td>2020.01.23</td>
            <td>100</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="NoticeList_title">게시글 제목 노출</td>
            <td>2020.01.23</td>
            <td>100</td>
          </tr>
          </tbody>
        </table>

        <div className="page_wrap">
          <div className="left_icon">
            <a href="#">
              <span className="line01">라인1</span>
              <span className="line02">라인2</span>
            </a>
          </div>

          <div className="page_num">
            <ul>
              <li><b>1</b></li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>

          <div className="right_icon">
            <a href="#">
              <span className="line03">라인3</span>
              <span className="line04">라인4</span>
            </a>
          </div>
        </div>
      </div>
  );
}

export default App;
