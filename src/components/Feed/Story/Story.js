import React from 'react'
import "./Story.css"
import StoryBox from './StoryBox'
export default function Story({userImg, bgImage , title}) {
    return (
        <div className="Story">
            <StoryBox title={title} userImg={userImg} bgImage={bgImage} />
            <StoryBox title="Tovino Thomas" userImg="https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/50669941_2589121487784523_2307655975038877696_n.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_ohc=LIzue9NS1bUAX8nu3Ug&_nc_ht=scontent-maa2-1.xx&oh=31c019ecf8cdebd77f9b1f9314fb8f1a&oe=6009EEEF" bgImage="https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/s960x960/131011936_4227464797283509_1214382250373077910_o.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=UKzBkjT9sQUAX9GfXje&_nc_ht=scontent-maa2-1.xx&tp=7&oh=340f36490388bd650da05d5cfd82d6be&oe=600AA480"/>
            <StoryBox title="Actor Surya" userImg="https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/109919288_1988572034613284_1755101998514091124_o.jpg?_nc_cat=1&ccb=2&_nc_sid=09cbfe&_nc_ohc=EBQtH-ESu1kAX-o7yt5&_nc_ht=scontent-maa2-1.xx&oh=b53d106aad9a9d147db600faab6b5608&oe=600C4317" bgImage="https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/132121307_2153398721463947_2832099218000218235_n.jpg?_nc_cat=1&ccb=2&_nc_sid=8bfeb9&_nc_ohc=0_29n1WH8EkAX9nXFfd&_nc_ht=scontent-maa2-1.xx&oh=96d11fddc85c0f498d7d1d2298ed804f&oe=6009F6E3"/>
            <StoryBox title="Hiphop Tamizha" userImg="https://scontent-maa2-2.xx.fbcdn.net/v/t1.0-9/86875334_10158328923455854_6744311132577595392_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=_cxVkAVP7_4AX81xs8c&_nc_ht=scontent-maa2-2.xx&oh=de1943b19eaac10aae09dd8bd180c3a4&oe=600D0E5A" bgImage="https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/129852952_10159200122935854_6221712576144791018_o.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_ohc=AR38fJHgqo0AX8kjBA8&_nc_ht=scontent-maa2-1.xx&oh=c410c3f2a045f7abbbd75954f0681e6b&oe=600AFD1B"/>
            <StoryBox title="Baby" userImg="" bgImage="https://image.freepik.com/free-photo/cityscape-with-seagulls-black-white-photo-with-film-grain-effect_1401-369.jpg"/>
            <StoryBox title="Baby" userImg="" bgImage="https://image.freepik.com/free-photo/cityscape-with-seagulls-black-white-photo-with-film-grain-effect_1401-369.jpg"/>
            <StoryBox title="Baby" userImg="" bgImage="https://image.freepik.com/free-photo/cityscape-with-seagulls-black-white-photo-with-film-grain-effect_1401-369.jpg"/>
            <StoryBox title="Baby" userImg="" bgImage="https://image.freepik.com/free-photo/cityscape-with-seagulls-black-white-photo-with-film-grain-effect_1401-369.jpg"/>

        </div>
    )
}
