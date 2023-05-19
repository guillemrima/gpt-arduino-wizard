
int ledPin = 13;    // Pin del LED
int brightness = 0; // Variable para el brillo del LED

void setup()
{
    pinMode(ledPin, OUTPUT); // Configurar el pin del LED como salida
}

void loop()
{
    // Encender el LED poco a poco hasta su máximo
    for (brightness = 0; brightness <= 255; brightness++)
    {
        analogWrite(ledPin, brightness);
        delay(10);
    }
    delay(2000); // Esperar 2 segundos
    // Apagar el LED poco a poco hasta su mínimo
    for (brightness = 255; brightness >= 0; brightness--)
    {
        analogWrite(ledPin, brightness);
        delay(10);
    }
    delay(2000); // Esperar 2 segundos
}