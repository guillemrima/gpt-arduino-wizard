void setup() {
  pinMode(2, OUTPUT);
  pinMode(7, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(7) == LOW) {
    digitalWrite(2, HIGH);
    delay(500);
    digitalWrite(2, LOW);
    delay(500);
  } else {
    digitalWrite(2, LOW);
  }
}