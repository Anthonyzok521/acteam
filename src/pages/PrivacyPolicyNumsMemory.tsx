const PrivacyPolicyNumsMemory = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <header className="mb-8 border-b border-slate-200 pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Política de Privacidad de Nums Memory
            </h1>
            <p className="mt-3 text-sm text-slate-500">Última actualización: 12 de agosto de 2026</p>
          </header>

          <div className="space-y-7 text-[15px] leading-7 text-slate-700">
            <p>
              Esta Política de Privacidad describe cómo <strong>Advanced Community</strong> ("nosotros")
              recopila, usa y comparte información cuando usás la aplicación móvil <strong>Nums Memory</strong>
              (el "Juego"), disponible para Android.
            </p>

            <section>
              <h2 className="mb-3 border-l-4 border-blue-500 pl-3 text-xl font-semibold text-slate-900">
                1. Información que recopilamos
              </h2>
              <p>Nums Memory recopila dos tipos de información, de forma bien separada:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Datos guardados únicamente en tu dispositivo:</strong> tu progreso (niveles
                  completados y desbloqueados), y tus preferencias de tema, idioma, tamaño de letra,
                  música y efectos de sonido. Estos datos se guardan localmente en tu teléfono y
                  <strong> nunca se envían a nuestros servidores</strong> — no operamos servidores propios
                  ni cuentas de usuario.
                </li>
                <li>
                  <strong>Datos recopilados por Google AdMob</strong> (ver sección siguiente), para poder
                  mostrar los anuncios que financian el desarrollo gratuito del Juego.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 border-l-4 border-blue-500 pl-3 text-xl font-semibold text-slate-900">
                2. Publicidad (Google AdMob)
              </h2>
              <p>
                Nums Memory usa <strong>Google AdMob</strong>, un servicio de publicidad de Google, para
                mostrar un banner publicitario dentro del Juego. Para poder funcionar, Google AdMob (y sus
                socios publicitarios) puede recopilar y procesar:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>El identificador de publicidad de tu dispositivo (Advertising ID / GAID).</li>
                <li>Información técnica del dispositivo (modelo, sistema operativo, idioma, zona horaria).</li>
                <li>Dirección IP (usada para estimar una ubicación aproximada, a nivel de ciudad/región).</li>
                <li>Interacciones con los anuncios (impresiones, clics) para medir su rendimiento y prevenir fraude.</li>
              </ul>
              <p className="mt-4">
                Esta información se usa para mostrar anuncios (personalizados o no, según tu elección de
                consentimiento) y para medir su desempeño. Google procesa estos datos según su propia
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 font-medium text-blue-600 underline decoration-blue-400 underline-offset-2 hover:text-blue-700"
                >
                  Política de Privacidad
                </a>
                y su
                <a
                  href="https://www.google.com/policies/technologies/partner-sites/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 font-medium text-blue-600 underline decoration-blue-400 underline-offset-2 hover:text-blue-700"
                >
                  Política de Socios Publicitarios
                </a>
                .
              </p>
              <p className="mt-4">
                Si estás en la Unión Europea, el Reino Unido, Suiza o California, la primera vez que abrís
                el Juego se te muestra un formulario de consentimiento (a través de la plataforma User
                Messaging Platform de Google) para elegir si aceptás anuncios personalizados. Podés cambiar tu
                elección de anuncios personalizados en cualquier momento desde la
                <a
                  href="https://adssettings.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 font-medium text-blue-600 underline decoration-blue-400 underline-offset-2 hover:text-blue-700"
                >
                  Configuración de anuncios de Google
                </a>
                , o desactivar la personalización de anuncios para tu dispositivo entero desde Ajustes de
                Android → Privacidad → Anuncios.
              </p>
            </section>

            <section>
              <h2 className="mb-3 border-l-4 border-blue-500 pl-3 text-xl font-semibold text-slate-900">
                3. Permisos del dispositivo
              </h2>
              <p>
                Nums Memory solicita acceso a Internet y al estado de la red (
                <span className="inline-block rounded-md border border-amber-200 bg-amber-50 px-1.5 py-0.5 font-mono text-[13px] text-amber-800">
                  android.permission.INTERNET
                </span>
                ,
                <span className="ml-1 inline-block rounded-md border border-amber-200 bg-amber-50 px-1.5 py-0.5 font-mono text-[13px] text-amber-800">
                  android.permission.ACCESS_NETWORK_STATE
                </span>
                ) únicamente para poder cargar los anuncios de AdMob. El Juego no solicita acceso a tu
                cámara, micrófono, contactos, ubicación precisa ni almacenamiento.
              </p>
            </section>

            <section>
              <h2 className="mb-3 border-l-4 border-blue-500 pl-3 text-xl font-semibold text-slate-900">
                4. Menores de edad
              </h2>
              <p>
                Nums Memory está dirigido a un público general y no está diseñado específicamente para niños.
                No recopilamos intencionalmente información de menores de 13 años. Si creés que un menor nos
                proporcionó datos personales sin el consentimiento correspondiente, contactanos para
                eliminarlos.
              </p>
            </section>

            <section>
              <h2 className="mb-3 border-l-4 border-blue-500 pl-3 text-xl font-semibold text-slate-900">
                5. Retención y seguridad de los datos
              </h2>
              <p>
                Los datos guardados en tu dispositivo (progreso y preferencias) permanecen ahí hasta que
                desinstalás el Juego o usás la opción "Borrar progreso" de Ajustes. Los datos que procesa
                Google AdMob se rigen por las políticas de retención de Google, no por nosotros.
              </p>
            </section>

            <section>
              <h2 className="mb-3 border-l-4 border-blue-500 pl-3 text-xl font-semibold text-slate-900">
                6. Cambios a esta política
              </h2>
              <p>
                Podemos actualizar esta Política de Privacidad ocasionalmente. Los cambios se van a reflejar
                en esta misma página, con la fecha de actualización al principio.
              </p>
            </section>

            <section>
              <h2 className="mb-3 border-l-4 border-blue-500 pl-3 text-xl font-semibold text-slate-900">
                7. Contacto
              </h2>
              <p>
                Si tenés preguntas sobre esta Política de Privacidad, podés escribirnos a
                <a
                  href="mailto:support@acteam.dev"
                  className="ml-1 font-medium text-blue-600 underline decoration-blue-400 underline-offset-2 hover:text-blue-700"
                >
                  support@acteam.dev
                </a>
                .
              </p>
            </section>
          </div>
        </article>

        <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-slate-600">
          <strong className="font-semibold text-slate-800">Antes de publicar:</strong> subí este archivo a
          una URL pública y accesible (GitHub Pages, Google Sites, tu propio dominio, etc.), y pegá esa URL
          en Play Console → Contenido de la app → Política de privacidad.
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyNumsMemory;
