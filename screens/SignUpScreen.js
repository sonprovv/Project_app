import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";

const SignUpScreen = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: "#000", alignItems: "center", flex: 1 }}
    >
      <Image
        source={require("../assets/img/InstagramLogo.png")}
        style={{ marginTop: 44 }}
      />
      <Text
        style={{ color: "#fff", fontSize: 16, margin: 20, textAlign: "center" }}
      >
        Đăng ký để xem ảnh và video từ bạn bè.
      </Text>
      <Pressable style={{ backgroundColor: "#1b74e4", borderRadius: 16 }}>
        <Text
          style={{
            color: "#fff",
            width: 300,
            fontSize: 16,
            padding: 12,
            textAlign: "center",
          }}
        >
          Đăng nhập bằng Facebook
        </Text>
      </Pressable>
      <View
        style={{ height: 1, backgroundColor: "white", marginVertical: 0 }}
      ></View>
      <Text style={{ color: "#fff", margin: 28, fontSize: 16, opacity: 0.5 }}>
        HOẶC
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Số di động hoặc email"
        placeholderTextColor="rgba(255, 255, 255, 0.60)"
        backgroundColor="rgba(255, 255, 255, 0.20)"
        color="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Tên đầy đủ"
        placeholderTextColor="rgba(255, 255, 255, 0.60)"
        backgroundColor="rgba(255, 255, 255, 0.20)"
        color="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Tên người dùng"
        placeholderTextColor="rgba(255, 255, 255, 0.60)"
        backgroundColor="rgba(255, 255, 255, 0.20)"
        color="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        placeholderTextColor="rgba(255, 255, 255, 0.60)"
        backgroundColor="rgba(255, 255, 255, 0.20)"
        color="white"
      />
      <Text
        style={{
          textAlign: "center",
          width: 312,
          marginTop: 16,
        }}
      >
        <Text style={{ color: "white" }}>
          Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ
          của bạn lên Instagram.
        </Text>
        <Text style={{ color: "#3797EF" }}> Tìm hiểu thêm</Text>
        {/* Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ
        của bạn lên Instagram. Tìm hiểu thêm */}
      </Text>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          width: 312,
          margin: 16,
        }}
      >
        <Text style={{ color: "white" }}>
          Bằng cách đăng ký, bạn đồng ý với{" "}
        </Text>
        <Text style={{ color: "#3797EF" }}>
          Điều khoản, Chính sách quyền riêng tư
        </Text>
        <Text style={{ color: "white" }}> và </Text>
        <Text style={{ color: "#3797EF" }}>
          Chính sách cookie của chúng tôi.{" "}
        </Text>

        {/* Bằng cách đăng ký, bạn đồng ý với Điều khoản, Chính sách quyền riêng tư
        và Chính sách cookie của chúng tôi. */}
      </Text>
      <Pressable style={{ backgroundColor: "#5faaff", borderRadius: 16 }}>
        <Text
          style={{
            color: "#fff",
            width: 300,
            fontSize: 16,
            padding: 12,
            textAlign: "center"
          }}
        >
          Đăng kí
        </Text>
      </Pressable>
      <Text
        style={{
          textAlign: "center",
          width: 312,
          margin: 40,
          fontSize: 16,
        }}
      >
        <Text style={{ color: "white" }}>Bạn có tài khoản?</Text>
        <Text style={{ color: "#3797EF" }}> Đăng nhập</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 44,
    marginBottom: 12,
    borderRadius: 5,
    borderWidth: 0.75,
    paddingLeft: 15,
  },
});

export default SignUpScreen;
