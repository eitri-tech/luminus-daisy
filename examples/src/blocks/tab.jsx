import React from 'react';
import { View, Text, Tab } from "@luminus/daisy"

export default function TabBlock() {

  return (
    <View className="border-solid p-4 my-4 shadow-lg rounded-md bg-white">
        <View className="prose prose-slate">
          <Text render="h3">Tabs</Text>
          <View className="p-4 w-full">
            <Tab className="tabs-lifted">
              <Tab.Content defaultChecked label="Vermelho" name="tabs-1">
                <View className="p-4">
                  <Text>
                  O vermelho, cor vibrante e energética, simboliza paixão, amor e poder. É frequentemente usado para chamar a atenção, como em placas de pare e avisos de perigo. Na moda, o vermelho transmite confiança e sensualidade. Em culturas asiáticas, é associado à sorte e prosperidade. No entanto, seu uso excessivo pode ser agressivo e cansativo.
                  </Text>
                </View>
              </Tab.Content>
              <Tab.Content label="Azul" name="tabs-1">
                <View className="p-4">
                  <Text>
                  O azul, cor serena e tranquila, evoca paz, harmonia e confiança. É frequentemente usado em ambientes corporativos para transmitir profissionalismo e estabilidade. Na natureza, o azul está presente no céu e no mar, representando a imensidão e a liberdade. Em muitas culturas, o azul é associado à espiritualidade e à devoção. No entanto, em excesso, pode transmitir frieza e tristeza.
                  </Text>
                </View>
              </Tab.Content>
              <Tab.Content label="Amarelo" name="tabs-1">
                <View className="p-4">
                  <Text>
                  O amarelo, cor alegre e vibrante, simboliza otimismo, criatividade e felicidade. É frequentemente usado para chamar a atenção, como em táxis e placas de sinalização. Na publicidade, o amarelo é associado a produtos divertidos e inovadores. Em algumas culturas, o amarelo representa o ouro e a riqueza. No entanto, em excesso, pode ser irritante e causar ansiedade.
                  </Text>
                </View>
              </Tab.Content>
            </Tab>
          </View>
        </View>
      </View>
  );
}

