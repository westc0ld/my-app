import React from 'react';

const Contents = () => {
  return (
    <section className="about">
      <div className="about_container">
        <div className="mini">
          <div className="content_1">
            <div className="photo">
              <img src='font/profile.jpg' className="profile" alt='profile' />
            </div>
            <div className="abstract">
              <h2 className="abstract_name">서 찬</h2>
              <div className="line"></div>
              <p className="text-base">
                {/* <img src='font\calendar-days-regular.svg' className="font_calendar" />&nbsp; */}
                생년월일: 99.01.19
                <br />학력: 한국공학대학교(경영학과)
                <br />연락처: 010-3414-0035
                <br />이메일: oso0035@naver.com
              </p>
            </div>
          </div>
          <div className="content_2">
            <h2 className="introduce_front">긍정에너지가 넘치는 서찬입니다!</h2>
            <div className="character">
              <div className="expert">#전문성</div> 
              <div className="expert">#성실성</div>
              <div className="expert">#사회봉사</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contents;
